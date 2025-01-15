<template>
  <SideForm :title="title" :btnText="btnText" :fields="filteredFields" :formData="formData" @onSubmit="submitHandler" />
</template>

<script>
import { computed, reactive, onMounted, watch, defineComponent } from 'vue';
import SideForm from '@components/side-form/side-form.vue';
import { createDefaultValues, setDataForObject, resetObject } from '@helpers/object';
import { entityFields, entityTypeFields, typeKeys } from '../entity';
import './types'

/**
 * Форма для создания и редактирования сущностей
 * 
 * @props {String} type - Тип сущности. Поддерживаются: `city`, `district`, `house`, `street`, `entrance`
 * @props {String} action - Тип действия. Поддерживаются: `add`, `edit`, `equipment`
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
     * Тип сущности. Поддерживаются: `city`, `district`, `house`, `street`, `entrance`
     */
    type: {
      type: String,
      required: true,
      default: 'district',
      validator: (value) => ['city', 'district', 'house', 'street', 'entrance'].includes(value),
    },
    /**
     * Тип действия. Поддерживаются: `add`, `edit`, `equipment`
     */
    action: {
      type: String,
      required: true,
      default: 'add',
      validator: (value) => ['add', 'edit', 'equipment'].includes(value),
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
     * Данные формы
     * @type {import('vue').Reactive<import('./types').EntityFormData>}
     */
    const formData = reactive(createDefaultValues(entityFields));

    /**
     * Заголовок формы
     * @type {import('vue').ComputedRef<string>}
     */
    const title = computed((oldTitle) => {
      if (!actionKeys[props.action]) {
        return oldTitle
      }
      return `${actionKeys[props.action]} ${typeKeys[props.type]}`
    });

    /**
     * Текст кнопки
     * @type {import('vue').ComputedRef<string>}
     */
    const btnText = computed(() => (props.action === 'add' ? 'Добавить' : 'Сохранить'));

    /**
     * Список полей формы для текущего типа сущности
     * @type {import('vue').ComputedRef<import('./types').EntityFormData>}
     */
    const filteredFields = computed(() =>
      entityTypeFields[props.type].reduce((acc, key) => {
        acc[key] = {
          ...entityFields[key],
          key,
        };
        return acc;
      }, {})
    );


    /**
     * Обработчик отправки формы
     * 
     * @returns {void}
    */
    const submitHandler = () => {
      const filteredData = Object.keys(filteredFields.value).reduce((acc, key) => {
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
      [() => props.action, () => props.type, props.initialData],
      ([newAction]) => {
        if (newAction === 'edit') {
          setDataForObject(formData, props.initialData);
        } else if (newAction === 'add') {
          resetObject(formData);
        }
      }
    );

    return {
      formData,
      title,
      btnText,
      filteredFields,
      submitHandler,
    };
  },
});
</script>

<style lang="scss" scoped src="./entities-form.scss" />
