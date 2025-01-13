<template>
  <SideForm :title="title" :btnText="btnText" :fields="filteredFields" :formData="formData" @onSubmit="submitHandler" />
</template>

<script setup>
import { computed, reactive, onMounted, watch } from 'vue';
import SideForm from '@components/side-form/side-form.vue';
import { entityFields, entityTypeFields } from '../entity';
import { createDefaultValues } from '@helpers/object';
import {typeKeys } from '../entity';

const props = defineProps({
  type: {
    type: String,
    required: true,
    default: 'district',
    validator: (value) => ['city', 'district', 'house', 'street', 'entrance'].includes(value)
  },
  action: {
    type: String,
    required: true,
    default: 'add',
    validator: (value) => ['add', 'edit', 'equipment'].includes(value)
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

const formData = reactive(createDefaultValues(entityFields));

const title = computed((oldTitle) => {
  if (!actionKeys[props.action]) {
    return oldTitle
  }
  return `${actionKeys[props.action]} ${typeKeys[props.type]}`
});
const btnText = computed(() => (props.action === 'add' ? 'Добавить' : 'Сохранить'));

const filteredFields = computed(() => entityTypeFields[props.type].map((key) => ({
  ...entityFields[key],
  key
})));

const submitHandler = (data) => {
  const filteredData = filteredFields.value.reduce((acc, field) => {
    if (data.hasOwnProperty(field.key)) {
      acc[field.key] = data[field.key];
    }
    return acc;
  }, {});
  filteredData.name = data.name;
  emit('onSubmit', filteredData);
};

const setFormDataForChange = () => {
  Object.keys(formData).forEach((key) => {
    formData[key] = props.initialData[key] ?? '';
  });
};

const resetFormData = () => {
  Object.keys(formData).forEach((key) => {
    formData[key] = '';
  });
};

onMounted(() => {
  if (props.action === 'edit') {
    setFormDataForChange();
  } else {
    resetFormData();
  }
});

watch(
  [() => props.action, () => props.type, props.initialData],
  ([newAction]) => {
    if (newAction === 'edit') {
      setFormDataForChange();
    } else if (newAction === 'add') {
      resetFormData();
    }
  }
);
</script>

<style lang="scss" scoped src="./entities-form.scss" />
