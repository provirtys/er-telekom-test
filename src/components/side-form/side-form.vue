<template>
  <div class="side-form">
    <h2 v-if="title" class="side-form__title">{{ title }}</h2>
    <form class="side-form__form" @submit.prevent="submitHandler">
      <div v-for="(field, index) in fields" :key="index" class="side-form__field-group">
        <template v-if="field.type === 'checkbox'">
          <v-checkbox v-model:value="formData[field.key]" :title="field.label"/>
        </template>
        <template v-else>
          <v-input v-model="formData[field.key]" :type="field.type" :required="field.required" :label="field.label"
            :name="field.name" :placeholder="field.placeholder" :focused="index === 0" :format="field.format" />
        </template>
      </div>
      <v-button class="side-form__form-submit">{{ btnText }}</v-button>
    </form>
  </div>
</template>

<script setup>
import VInput from '@ui/v-input/v-input';
import VButton from '@ui/v-button/v-button';
import VCheckbox from '@ui/v-checkbox/v-checkbox.vue';

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: 'Форма'
  },
  btnText: {
    type: String,
    required: false,
    default: 'Отправить'
  },
  fields: {
    type: Array,
    required: true
  },
  formData: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['onSubmit']);

const submitHandler = () => {
  emit('onSubmit', props.formData);
};

</script>

<style lang="scss" scoped src="./side-form.scss" />
