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
        <v-button class="entities-equipment__add-button" type="filled" size=small @click="addEquipmentHandler">Добавить
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

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import VPopup from '@ui/v-popup/v-popup.vue';
import VIcon from '@ui/v-icon/v-icon.vue';
import { useEquipmentsStore } from '@/store/equipments/equipments';
import VLoader from '@ui/v-loader/v-loader.vue';
import VButton from '@ui/v-button/v-button'
import VModal from '@ui/v-modal/v-modal.vue';
import EquipmentForm from '@components/equipment/equipment-form/equipment-form.vue';
import { Timestamp } from 'firebase/firestore';
import { formatSecondsToDate, formatSecondsToInputDate } from '@helpers/date'
import { useModalsStore } from "@/store/modals/modals";

const { createEquipment, getEquipmentByEntityId, updateEquipment, deleteEquipment } = useEquipmentsStore();

const props = defineProps({
  entityId: {
    type: String,
    required: true,
    default: '',
  },
});
const emit = defineEmits(['close-modal']);

const modalsStore = useModalsStore()
const { openModal, closeModal } = modalsStore

const items = ref([])
const formAction = ref('')
const selectedEquipmentId = ref('')

const popupStates = reactive({});
const initialData = reactive({})
const loadings = reactive({
  main: false,
  modal: false,
  inner: false
})

const isOpenModal = computed(() => modalsStore.modals['equipment-form'])

const equipmentFormSubmitHandler = async (data) => {
  loadings.modal = true
  const payload = {
    ...data,
    installDate: data.installDate ? Timestamp.fromDate(new Date(data.installDate)) : null
  }
  if (formAction.value === 'add') {
    payload.entityId = props.entityId
    await createEquipment(payload)
  }
  else if (formAction.value === 'edit') {
    await updateEquipment(payload, selectedEquipmentId.value)
  }
  items.value = await getEquipmentByEntityId(props.entityId)
  loadings.modal = false
  closeModal('equipment-form')
}

const addEquipmentHandler = () => {
  openModal('equipment-form')
  formAction.value = 'add'
}

const updateEquipmentHandler = (item) => {
  formAction.value = 'edit'
  popupStates[item.id] = false
  selectedEquipmentId.value = item.id
  Object.keys(item).forEach((key) => {
    if (key === 'installDate') {
      initialData[key] = formatSecondsToInputDate(item[key])
    }
    else {
      initialData[key] = item[key]
    }
  })
  openModal('equipment-form')
}

const deleteEquipmentHandler = async (item) => {
  loadings.inner = true
  popupStates[item.id] = false
  await deleteEquipment(item.id)
  items.value = await getEquipmentByEntityId(props.entityId)
  loadings.inner = false
}

onMounted(async () => {
  if (props.entityId) {
    loadings.main = true
    items.value = await getEquipmentByEntityId(props.entityId)
    loadings.main = false
  }
});


</script>

<style lang="scss" scoped src="./equipment-table.scss" />
