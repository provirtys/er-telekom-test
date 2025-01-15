<template>
  <component :is="tag" :class="classes" @click="emitClick" :to="to || null">
    <slot />
  </component>
</template>

<script>
import { computed, defineComponent } from 'vue';

/**
 * Компонент кнопки.
 *
 * @slot default - Содержимое кнопки.
 *
 * @props {String} to - Ссылка, если не пустая, то кнопка станет `router-link`, а иначе `button`.
 * @props {String} type - Тип кнопки. Принимает только значение `filled`.
 * @props {String} size - Размер кнопки. Принимает значения `small`, `medium` и `big`.
 * @props {String} color - Цвет кнопки. Принимает значения `primary` и `white`.
 *
 * @emits {click} Нажатие на кнопку
 */
export default defineComponent({
  name: 'VButton',
  props: {
    to: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      validator(val) {
        return ['filled'].includes(val);
      },
    },
    size: {
      type: String,
      required: false,
      default: 'medium',
      validator(val) {
        return ['small', 'medium', 'big'].includes(val);
      },
    },
    color: {
      type: String,
      required: false,
      default: 'primary',
      validator(val) {
        return ['primary', 'white'].includes(val);
      },
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const tag = computed(() => (props.to ? 'router-link' : 'button'));

    const classes = computed(() => ({
      button: true,
      [`button--${props.type}`]: props.type,
      [`button--${props.size}`]: props.size,
      [`button--${props.color}`]: props.color,
    }));

    const emitClick = () => {
      emit('click');
    };

    return {
      tag,
      classes,
      emitClick,
    };
  },
});
</script>

<style lang="scss" scoped src="./v-button.scss" />
