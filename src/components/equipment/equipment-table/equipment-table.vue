<template>
  <div class="entities-equipment">
    <template v-if="!loadings.main">
      <div v-if="items.length" class="entities-equipment__table-container">
        <table class="entities-equipment__table">
          <thead>
            <tr>
              <th>Название оборудования</th>
              <th>Дата установки</th>
              <th>Статус</th>
              <th>Ответственный</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id" class="entities-equipment__item">
              <td>{{ item.name }}</td>
              <td>{{ formatSecondsToDate(item.installDate) }}</td>
              <td>{{ item.status }}</td>
              <td>{{ item.responsible }}</td>
              <td class="actions-cell sticky">
                <v-popup v-model="popupStates[item.id]" vertical-offset="-30" horizontal-offset="40">
                  <template #trigger>
                    <button class="entities-equipment__menu-btn">
                      <v-icon class="entities-equipment__menu-icon" name="vertical-dots" width="24" height="24" />
                    </button>
                  </template>
                  <div class="entities-equipment__popup-actions">
                    <ul class="entities-equipment__actions-list">
                      <li class="entities-equipment__action" @click="updateEquipmentHandler(item)">Изменить</li>
                      <li class="entities-equipment__action" @click="deleteEquipmentHandler(item)">Удалить</li>
                    </ul>
                  </div>
                </v-popup>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="loadings.inner" class="entities-equipment__inner-loader">
        <v-loader />
      </div>
      <div class="entities-equipment__actions">
        <v-button class="entities-equipment__add-button" type="filled" size="small"
          @click="addEquipmentHandler">Добавить
          оборудование</v-button>
      </div>
    </template>
    <div v-else class="entities-equipment__loader">
      <v-loader />
    </div>
  </div>
  <v-modal v-model:isOpen="isOpenModal" @close-modal="closeModal('equipment-form')" type="side" close-outside
    :loading="loadings.modal">
    <equipment-form :action="formAction" :initialData="initialData" @on-submit="equipmentFormSubmitHandler" />
  </v-modal>
</template>

<script>
import { ref, reactive, computed, onMounted, defineComponent } from 'vue';
import { Timestamp } from 'firebase/firestore';
import { useModalsStore } from "@store/modals/modals";
import { useEquipmentsStore } from '@store/equipments/equipments';
import VPopup from '@ui/v-popup/v-popup.vue';
import VIcon from '@ui/v-icon/v-icon.vue';
import VLoader from '@ui/v-loader/v-loader.vue';
import VButton from '@ui/v-button/v-button';
import VModal from '@ui/v-modal/v-modal.vue';
import EquipmentForm from '@components/equipment/equipment-form/equipment-form.vue';
import { formatSecondsToDate, formatSecondsToInputDate } from '@helpers/date';
import '../types'

/**
 * Компонент для отображения таблицы с оборудованием
 * 
 * @props {string} entityId - ID сущности
 * 
 * @emits close-modal
 */
export default defineComponent({
  components: {
    VPopup,
    VIcon,
    VLoader,
    VButton,
    VModal,
    EquipmentForm,
  },
  props: {
    /**
     * ID сущности
     */
    entityId: {
      type: String,
      required: true,
      default: '',
    },
  },
  emits: ['close-modal'],
  setup(props) {
    const modalsStore = useModalsStore();
    const { openModal, closeModal } = modalsStore;
    const { createEquipment, getEquipmentByEntityId, updateEquipment, deleteEquipment } = useEquipmentsStore();

    /**
     * Массив с оборудованием
     * @type {import('vue').Ref<import('../types').EquipmentFields[]>}
     */
    const items = ref([]);

    /**
     * Выбранное действие над оборудованием
     * @type {import('vue').Ref<import('../types').EquipmentAction>}
     */
    const formAction = ref('');

    /**
     * Идентификатор выбранного оборудования
     * @type {import('vue').Ref<string>}
     */
    const selectedEquipmentId = ref('');

    /**
     * Состояния попапов
     * @type {import('vue').Ref<Record<string, boolean>>}
     */
    const popupStates = reactive({});

    /**
     * Объект для заполнения формы, когда `action = edit`
     * @type {import('vue').Reactive<import('../types').EquipmentFields>}
     */
    const initialData = reactive({});

    /**
     * Флаги загрузки данных
     * main - загрузка всего списка оборудования
     * modal - загрузка модального окна
     * inner - загрузка при удалении оборудования, с сохранением отображения таблицы оборудования
     * 
     * @type {import('vue').Reactive<{ main: boolean, modal: boolean, inner: boolean }>}
     */
    const loadings = reactive({
      main: false,
      modal: false,
      inner: false,
    });

    /**
     * Флаг отображения модального окна
     * @type {import('vue').ComputedRef<boolean>}
     */
    const isOpenModal = computed(() => modalsStore.modals['equipment-form']);

    /**
     * Обработчик добавления или редактирования оборудования
     * @param {import('vue').Reactive<import('../types').EquipmentFields>} data - Данные для отправки
     * 
     * @returns {void}
     */
    const equipmentFormSubmitHandler = async (data) => {
      loadings.modal = true;
      const payload = {
        ...data,
        installDate: data.installDate ? Timestamp.fromDate(new Date(data.installDate)) : null,
      };
      if (formAction.value === 'add') {
        payload.entityId = props.entityId;
        await createEquipment(payload);
      } else if (formAction.value === 'edit') {
        await updateEquipment(payload, selectedEquipmentId.value);
      }
      items.value = await getEquipmentByEntityId(props.entityId);
      loadings.modal = false;
      closeModal('equipment-form');
    };

    /**
     * Обработчик нажатия на действие `add`
     * 
     * @returns {void}
     */
    const addEquipmentHandler = () => {
      openModal('equipment-form');
      formAction.value = 'add';
    };

    /**
     * Обработчик нажатия на действие `edit`
     * @param {import('vue').Reactive<import('../types').EquipmentFields>} item 
     * 
     * @returns {void}
     */
    const updateEquipmentHandler = (item) => {
      formAction.value = 'edit';
      popupStates[item.id] = false;
      selectedEquipmentId.value = item.id;
      Object.keys(item).forEach((key) => {
        if (key === 'installDate') {
          initialData[key] = formatSecondsToInputDate(item[key]);
        } else {
          initialData[key] = item[key];
        }
      });
      openModal('equipment-form');
    };

    /**
     * Обработчик нажатия на действие `delete`/удаления оборудования
     * @param {import('vue').Reactive<import('../types').EquipmentFields>} item 
     * 
     * @returns {void}
     */
    const deleteEquipmentHandler = async (item) => {
      loadings.inner = true;
      popupStates[item.id] = false;
      await deleteEquipment(item.id);
      items.value = await getEquipmentByEntityId(props.entityId);
      loadings.inner = false;
    };

    onMounted(async () => {
      if (props.entityId) {
        loadings.main = true;
        items.value = await getEquipmentByEntityId(props.entityId);
        loadings.main = false;
      }
    });

    return {
      items,
      formAction,
      selectedEquipmentId,
      popupStates,
      initialData,
      loadings,
      isOpenModal,
      closeModal,
      equipmentFormSubmitHandler,
      addEquipmentHandler,
      updateEquipmentHandler,
      deleteEquipmentHandler,
      formatSecondsToDate,
    };
  },
});
</script>

<style lang="scss" scoped src="./equipment-table.scss" />
