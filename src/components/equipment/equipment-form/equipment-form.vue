<template>
  <SideForm :title="title" :btnText="btnText" :fields="equipmentFields" :formData="formData"
    @onSubmit="submitHandler" />
</template>

<script>
import { computed, reactive, onMounted, watch, defineComponent } from 'vue';
import SideForm from '@components/side-form/side-form.vue';
import { createDefaultValues, setDataForObject, resetObject } from '@helpers/object'
import { equipmentFields } from '../equipmentFields';
import './types'

/**
 * Форма для создания и редактирования оборудования
 * 
 * @props {String} action - Тип действия. Поддерживаются: `add`, `edit`
 * @props {Object} initialData - Данные для редактирования. Используется, когда `action = 'edit'`
 * 
 * @emits {onSubmit} Событие отправки формы. Эмитится объект с данными формы
 */
export default defineComponent({
  components: {
    SideForm,
  },
  props: {
    /**
     * Тип действия. Поддерживаются: `add`, `edit`
     */
    action: {
      type: String,
      required: true,
      default: 'add',
      validator: (value) => ['add', 'edit'].includes(value),
    },
    /**
     * Данные для редактирования. Используется, когда `action = 'edit'`
     */
    initialData: {
      type: Object,
      required: false,
    },
  },
  emits: ['onSubmit'],
  setup(props, { emit }) {
    const actionKeys = {
      add: 'Добавить',
      edit: 'Редактировать',
    };

    /**
     * Заголовок формы
     * @type {import('vue').ComputedRef<string>}
     */
    const title = computed(() => `${actionKeys[props.action]} оборудование`);

    /**
     * Текст кнопки
     * @type {import('vue').ComputedRef<string>}
     */
    const btnText = computed(() => (props.action === 'add' ? 'Добавить' : 'Сохранить'));

    /**
     * Данные формы
     * @type {import('vue').Reactive<import('./types').EquipmentFormData>}
     */
    const formData = reactive(createDefaultValues(equipmentFields));

    /**
     * Обработчик отправки формы
     * 
     * @returns {void}
     */
    const submitHandler = () => {
      const filteredData = Object.keys(equipmentFields).reduce((acc, key) => {
        if (formData.hasOwnProperty(key)) {
          acc[key] = formData[key];
        }
        return acc;
      }, {});

      filteredData.name = formData.name;

      emit('onSubmit', filteredData);
    };

    onMounted(() => {
      if (props.action === 'edit') {
        setDataForObject(formData, props.initialData);
      } else {
        resetObject(formData);
      }
    });

    watch(
      [() => props.action, props.initialData],
      ([newAction]) => {
        if (newAction === 'edit') {
          setDataForObject(formData, props.initialData);
        } else if (newAction === 'add') {
          resetObject(formData);
        }
      }
    );

    return {
      title,
      btnText,
      formData,
      equipmentFields,
      submitHandler
    };
  },
});
</script>

<style lang="scss" scoped src="./equipment-form.scss" />
