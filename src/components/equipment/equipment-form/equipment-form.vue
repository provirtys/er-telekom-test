<template>
  <SideForm :title="title" :btnText="btnText" :fields="filteredFields" :formData="formData" @onSubmit="submitHandler" />
</template>

<script setup>
import SideForm from '@components/side-form/side-form.vue';

import { computed, reactive, onMounted } from 'vue';
import { watch } from 'vue';
import { equipmentFields } from '../equipmentFields'
import { createDefaultValues } from '@helpers/object';

const props = defineProps({
  action: {
    type: String,
    required: true,
    default: 'add',
    validator: (value) => ['add', 'edit'].includes(value)
  },
  initialData: {
    type: Object,
    required: false
  }
});

const emit = defineEmits(['onSubmit']);

const actionKeys = {
  add: 'Добавить',
  edit: 'Редактировать'
};

const title = computed(() => `${actionKeys[props.action]} оборудование`);

const btnText = computed(() => props.action === 'add' ? 'Добавить' : 'Сохранить');

const formData = reactive(createDefaultValues(equipmentFields));

const filteredFields = computed(() => {
  return Object.keys(equipmentFields).map(key => ({
    ...equipmentFields[key],
    key
  }));
});


const submitHandler = () => {
  const filteredData = filteredFields.value.reduce((acc, field) => {
    if (formData.hasOwnProperty(field.key)) {
      acc[field.key] = formData[field.key];
    }
    return acc;
  }, {});

  filteredData.name = formData.name;

  emit('onSubmit', filteredData);
};

const setFormDataForChange = () => {
  Object.keys(formData).forEach(key => {
    formData[key] = props.initialData[key] ?? ''
  })
}

const resetFormData = () => {
  Object.keys(formData).forEach((key) => {
    formData[key] = '';
  });
};

onMounted(() => {
  if (props.action === 'edit') {
    setFormDataForChange()
  }
  else {
    resetFormData()
  }
})

watch(
  [() => props.action, props.initialData],
  ([newAction]) => {
    if (newAction === 'edit') {
      setFormDataForChange();
    } else if(newAction === 'add') {
      resetFormData();
    }
  }
);

</script>

<style lang="scss" scoped src="./equipment-form.scss" />
