<template>
  <div :class="componentClasses">
    <label v-if="label" :class="labelClasses" :for="nameComputed">{{ label }}</label>
    <input
      v-model="formattedValue"
      class="input-wrapper__input"
      v-bind="inputAttributes"
      ref="inputRef"
      @focusin="inputFocused = true"
      @focusout="inputFocused = false"
      @input="onInput"
    />
    <v-icon
      v-if="type === 'password'"
      name="eye"
      width="20"
      height="20"
      :class="iconClasses"
      @click="passwordShown = !passwordShown"
    />
  </div>
</template>

<script>
import { ref, computed, onMounted, watch, defineComponent } from 'vue';
import VIcon from '@ui/v-icon/v-icon';

/**
 * Компонент для вывода полей для ввода данных типа `text`, `password`, `email`, `number`, `date`
 * 
 * @props {String} type - Тип поля. Поддерживаются: `text`, `password`, `email`, `number`, `date`
 * @props {String} placeholder - Текст placeholder
 * @props {String} label - Выводимое название поля
 * @props {Boolean} required - Является ли поле обязательным
 * @props {String} name - Имя поля, значние будет вставлено в атрибут `name` в input
 * @props {Boolean} focused - Флаг, указывающий, будет ли поле в фокусе при монтировании компонента
 * @props {Boolean} format - Флаг, указывающий, нужно ли форматировать вводимое значение в формате `1 234 567 890`
 * @props {String, Number} modelValue - Используется как `v-model`
 * 
 * @emits {update:modelValue} - Событие обновления значения поля
 */
export default defineComponent({
  name: 'VInput',
  components: { VIcon },
  props: {
    /**
     * Тип поля. Поддерживаются: `text`, `password`, `email`, `number`, `date`
     */
    type: {
      type: String,
      default: 'text',
      required: false,
      validator(val) {
        return ['text', 'password', 'email', 'number', 'date'].includes(val);
      }
    },
    /**
     * Текст placeholder
     */
    placeholder: {
      type: String,
      default: '',
      required: false
    },
    /**
     * Выводимое название поля
     */
    label: {
      type: String,
      default: '',
      required: false
    },
    /**
     * Является ли поле обязательным
     */
    required: {
      type: Boolean,
      default: false,
      required: false
    },
    /**
     * Имя поля, значние будет вставлено в атрибут `name` в input
     */
    name: {
      type: String,
      default: '',
      required: false
    },
    /**
     * Флаг, указывающий, будет ли поле в фокусе при монтировании компонента
     */
    focused: {
      type: Boolean,
      default: false,
      required: false
    },
    /**
     * Флаг, указывающий, нужно ли форматировать вводимое значение в формате `1 234 567 890`
     */
    format: {
      type: Boolean,
      default: false,
      required: false
    },
    /**
     * Используется как `v-model`
     */
    modelValue: {
      type: [String, Number, null],
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const inputFocused = ref(false);
    const passwordShown = ref(false);
    const inputRef = ref(null);

    const inputType = computed(() => {
      if (props.type === 'password' && passwordShown.value) return 'text';
      return props.type;
    });

    const labelTransformed = computed(() => !!props.modelValue || inputFocused.value);

    const componentClasses = computed(() => [
      'input-wrapper',
      {
        'input-wrapper--focused': inputFocused.value
      }
    ]);

    const iconClasses = computed(() => [
      'input-wrapper__icon',
      {
        'input-wrapper__icon--active': passwordShown.value
      }
    ]);

    const labelClasses = computed(() => [
      'input-wrapper__label',
      {
        'input-wrapper__label--transformed': labelTransformed.value || props.type === 'date'
      }
    ]);

    const nameComputed = computed(() => {
      return props.name || `input-${Math.random().toString(36).substr(2, 9)}`;
    });

    const formattedValue = ref(props.modelValue || '');

    const formatNumber = (value) => {
      if (!value) return '';
      const cleaned = value.toString().replace(/\s+/g, '');
      if (isNaN(Number(cleaned))) return value;
      return Number(cleaned).toLocaleString('ru-RU');
    };

    const onInput = (event) => {
      const value = event.target.value;
      if (props.format) {
        formattedValue.value = formatNumber(value);
        emit('update:modelValue', value.replace(/\s+/g, ''));
      } else {
        formattedValue.value = value;
        emit('update:modelValue', value);
      }
    };

    watch(
      () => props.modelValue,
      (newValue) => {
        if (props.format) {
          formattedValue.value = formatNumber(newValue);
        } else {
          formattedValue.value = newValue;
        }
      }
    );

    const inputAttributes = computed(() => ({
      type: inputType.value,
      placeholder: props.placeholder,
      required: props.required,
      name: nameComputed.value,
      id: nameComputed.value
    }));

    onMounted(() => {
      if (props.focused && inputRef.value) {
        inputRef.value.focus();
      }
    });

    return {
      inputRef,
      inputFocused,
      passwordShown,
      inputType,
      componentClasses,
      iconClasses,
      labelClasses,
      nameComputed,
      formattedValue,
      inputAttributes,
      onInput
    };
  }
});
</script>

<style lang="scss" scoped src="./v-input.scss" />
