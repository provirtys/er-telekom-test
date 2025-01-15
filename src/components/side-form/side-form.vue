<template>
  <div class="side-form">
    <h2 v-if="title" class="side-form__title">{{ title }}</h2>
    <form class="side-form__form" @submit.prevent="submitHandler">
      <div v-for="(field, key) in fields" :key="key" class="side-form__field-group">
        <template v-if="field.type === 'checkbox'">
          <v-checkbox v-model:value="formData[key]" :title="field.label" />
        </template>
        <template v-else>
          <v-input
            v-model="formData[key]"
            :type="field.type"
            :required="field.required"
            :label="field.label"
            :name="field.name"
            :placeholder="field.placeholder"
            :focused="key === 'name'"
            :format="field.format"
          />
        </template>
      </div>
      <v-button class="side-form__form-submit">{{ btnText }}</v-button>
    </form>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import VInput from '@ui/v-input/v-input';
import VButton from '@ui/v-button/v-button';
import VCheckbox from '@ui/v-checkbox/v-checkbox.vue';

/**
 * Компонент формы для добавления и изменения сущностей/оборудования
 * 
 * @props {String} title - Заголовок формы
 * @props {String} btnText - Текст кнопки отправки
 * @props {Object} fields - Объект с полями формы
 * @props {Object} formData - Объект с данными формы
 * 
 * @emits {onSubmit} - Событие отправки формы
 */
export default defineComponent({
  name: 'SideForm',
  components: {
    VInput,
    VButton,
    VCheckbox,
  },
  props: {
    /**
     * Заголовок формы
     */
    title: {
      type: String,
      required: false,
      default: 'Форма',
    },
    /**
     * Текст кнопки отправки
     */
    btnText: {
      type: String,
      required: false,
      default: 'Отправить',
    },
    /**
     * Объект с полями формы
     */
    fields: {
      type: Object,
      required: true,
    },
    /**
     * Объект с данными формы
     */
    formData: {
      type: Object,
      required: true,
    },
  },
  emits: ['onSubmit'],
  setup(_, { emit }) {
    const submitHandler = () => {
      emit('onSubmit');
    };

    return {
      submitHandler,
    };
  },
});
</script>

<style lang="scss" scoped src="./side-form.scss" />
