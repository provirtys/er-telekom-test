<template>
  <div v-if="!loadingItems" class="entities">
    <div class="entities-accordion__content">
      <entities-accordion :items="cities" @action="handleAction" itemsType="city" />
    </div>
  </div>
  <div v-else class="entities__loader">
    <v-loader />
  </div>
  <v-modal v-model:isOpen="isOpenEntitiesForm" @close-modal="closeModal('entities-form')" type="side"
    :loading="loadingModal">
    <entities-form :type="formEntityType" :action="formAction" :initialData="initialData"
      @on-submit="entityFormSubmitHandler" />
  </v-modal>
  <v-modal v-model:isOpen="isOpenEquipment" @close-modal="closeModal('equipment')">
    <equipment-table :entityId="selectedEntityId" />
  </v-modal>
</template>

<script>
import { ref, reactive, computed, defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useEntitiesStore } from '@store/entities/entities';
import { useModalsStore } from '@store/modals/modals';
import VLoader from '@ui/v-loader/v-loader.vue';
import VModal from '@ui/v-modal/v-modal.vue';
import EntitiesAccordion from '@components/entities/entities-accordion/entities-accordion.vue';
import EntitiesForm from '@components/entities/entities-form/entities-form.vue';
import EquipmentTable from '@components/equipment/equipment-table/equipment-table.vue';
import { entityTypeFields, childrenTypes } from './entity';
import './types'

/**
 * Главный компонент для вывода сущностей
 */
export default defineComponent({
  components: {
    VLoader,
    VModal,
    EntitiesAccordion,
    EntitiesForm,
    EquipmentTable,
  },
  setup() {
    const entitiesStore = useEntitiesStore();
    const { createEntity, deleteEntity, updateEntity } = entitiesStore;
    const { entities: cities, loading: loadingItems } = storeToRefs(entitiesStore);

    const modalsStore = useModalsStore();
    const { openModal, closeModal } = modalsStore;

    /**
     * Действие над сущностью
     * @type {import('vue').Ref<import('./types').EntityAction | ''>}
     */
    const formAction = ref('');

    /**
     * Идентификатор выбранной сущности
     * @type {import('vue').Ref<string>}
     */
    const selectedEntityId = ref('');

    /**
     * Тип сущности для формы
     * @type {import('vue').Ref<EntityTypesSingular | ''>}
     */
    const formEntityType = ref('');

    /**
     * Флаг загрузки для модального окна
     * @type {import('vue').Ref<boolean>}
     */
    const loadingModal = ref(false);

    /**
     * Объект для заполнения формы, когда `action = edit`
     * @type {import('vue').Reactive<import('./types').EntityFields>}
     */
    const initialData = reactive({});

    /**
     * Флаг открытия модального окна `entities-form`
     * @type {import('vue').ComputedRef<boolean>}
     */
    const isOpenEntitiesForm = computed(() => modalsStore.modals['entities-form']);

    /**
    * Флаг открытия модального окна `equipment`
    * @type {import('vue').ComputedRef<boolean>}
     */
    const isOpenEquipment = computed(() => modalsStore.modals['equipment']);

    /**
     * Заполнение формы данными для редактирования
     * @param {import('vue').Reactive<import('./types').EntityFields>} item - Источник данных
     * 
     * @returns {void}
     */
    const createInitialData = (item) => {
      Object.keys(initialData).forEach((key) => {
        initialData[key] = '';
      });
      entityTypeFields[item.type].forEach((key) => {
        initialData[key] = item[key] ?? '';
      });
    };

    /**
     * Обработка действий над сущностью
     * @param {import('./types').EntityAction} action - Действие
     * @param {import('./types').EntityFields} item - Данные сущности
     * 
     * @returns {void}
     */
    const handleAction = async (action, item) => {
      formAction.value = action;
      selectedEntityId.value = item.id;

      if (action === 'add') {
        formEntityType.value = childrenTypes[item.type];
        openModal('entities-form');
      } else if (action === 'edit') {
        formEntityType.value = item.type;
        createInitialData(item);
        openModal('entities-form');
      } else if (action === 'delete') {
        await deleteEntity(item);
      } else if (action === 'equipment') {
        openModal('equipment');
      }
    };

    /**
     * Обработчик отправки формы
     * @param {import('./types').EntityFields} data - Данные для отправки
     */
    const entityFormSubmitHandler = async (data) => {
      loadingModal.value = true;
      if (formAction.value === 'add') {
        await createEntity(formEntityType.value, data, selectedEntityId.value);
      } else if (formAction.value === 'edit') {
        await updateEntity(formEntityType.value, data, selectedEntityId.value);
      }
      loadingModal.value = false;
      closeModal('entities-form');
    };

    return {
      cities,
      loadingItems,
      isOpenEntitiesForm,
      isOpenEquipment,
      formAction,
      selectedEntityId,
      formEntityType,
      loadingModal,
      initialData,
      handleAction,
      entityFormSubmitHandler,
      closeModal,
    };
  },
});
</script>

<style lang="scss" scoped src="./entities.scss" />
