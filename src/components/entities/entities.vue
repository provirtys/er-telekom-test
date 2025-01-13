<template>
  <div v-if="!loadingItems" class="entities">
    <div class="entities-accordion__content">
      <entities-accordion :items="cities" @action="handleAction" />
    </div>
  </div>
  <div v-else class="entities__loader">
    <v-loader />
  </div>
  <v-modal v-model:isOpen="isOpenEntitiesForm" @close-modal="closeModal('entities-form')" type="side" :loading="loadingModal">
    <entities-form :type="formEntityType" :action="formAction" :initialData="initialData"
      @on-submit="entityFormSubmitHandler" />
  </v-modal>
  <v-modal v-model:isOpen="isOpenEquipment" @close-modal="closeModal('equipment')">
    <equipment-table :entityId="selectedEntityId" />
  </v-modal>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useEntitiesStore } from '@/store/entities/entities';
import { storeToRefs } from 'pinia';
import VLoader from '@ui/v-loader/v-loader.vue';
import VModal from '@ui/v-modal/v-modal.vue';
import EntitiesAccordion from '@components/entities/entities-accordion/entities-accordion.vue';
import EntitiesForm from '@components/entities/entities-form/entities-form.vue';
import { entityTypeFields, childrenTypes } from './entity'
import EquipmentTable from '@components/equipment/equipment-table/equipment-table.vue';
import { useModalsStore } from "@/store/modals/modals";

const entitiesStore = useEntitiesStore();
const { createEntity, deleteEntity, updateEntity } = entitiesStore
const { entities: cities, loading: loadingItems } = storeToRefs(entitiesStore);

const modalsStore = useModalsStore()
const {openModal, closeModal} = modalsStore

const formAction = ref('');
const selectedEntityId = ref('')
const formEntityType = ref('')
const loadingModal = ref(false)
const initialData = reactive({})

const isOpenEntitiesForm = computed(() => modalsStore.modals['entities-form'])
const isOpenEquipment= computed(() => modalsStore.modals['equipment'])

const createInitialData = (item) => {
  Object.keys(initialData).forEach((key) => {
    initialData[key] = '';
  });
  entityTypeFields[item.type].forEach(key => {
    initialData[key] = item[key] ?? ''
  })
};

const handleAction = async (action, item) => {
  formAction.value = action;
  selectedEntityId.value = item.id

  if (action === 'add') {
    formEntityType.value = childrenTypes[item.type]
    openModal('entities-form');
  }
  else if (action === 'edit') {
    formEntityType.value = item.type
    createInitialData(item)
    openModal('entities-form');
  } else if (action === 'delete') {
    await deleteEntity(item)
  }
  else if (action === 'equipment') {
    openModal('equipment')
  }
};

const entityFormSubmitHandler = async (data) => {
  loadingModal.value = true
  if (formAction.value === 'add') {
    await createEntity(formEntityType.value, data, selectedEntityId.value)
  }
  else if (formAction.value === 'edit') {
    await updateEntity(formEntityType.value, data, selectedEntityId.value)
  }
  loadingModal.value = false
  closeModal('entities-form')
}
</script>

<style lang="scss" scoped src="./entities.scss" />
