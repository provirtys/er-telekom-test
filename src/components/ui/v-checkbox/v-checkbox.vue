<template>
  <label class="checkbox">
    <input :checked="value" type="checkbox" class="checkbox__input" @change="$emit('update:value', $event.target.checked)" />
    <template v-if="title">
      {{ title }}
    </template>
  </label>
</template>

<script>
import { defineComponent } from 'vue';

/**
 * Компонент чекбокса.
 * Используется для отображения чекбокса с текстовым заголовком.
 * 
 * @props {String} title - Заголовок чекбокса, отображаемый рядом с ним.
 * @props {Boolean} value - Значение чекбокса. Используется с `v-model`.
 * 
 * @emits {update:value} Событие обновления значения чекбокса. Эмитится при изменении значения.
 */
export default defineComponent({
  name: 'VCheckbox',
  emits: ['update:value'],
  props: {
    /**
     * Заголовок чекбокса, отображаемый рядом с ним.
     */
    title: {
      type: String,
      required: false,
      default: ''
    },
    /**
     * Значение чекбокса. Используется с `v-model`.
     */
    value: {
      type: Boolean,
      required: false,
      default: false
    }
  },
});
</script>

<style lang="scss" scoped src="./v-checkbox.scss" />
