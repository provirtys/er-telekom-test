<template>
  <label class="checkbox">
    <input :checked="value" type="checkbox" class="checkbox__input" @change="$emit('update:value', $event.target.checked)" />
    <template v-if="title">
      {{ title }}
    </template>
  </label>
</template>

<script>
/**
 * Компонент чекбокса
 * 
 * @props {String} title - Заголовок чекбокса
 * @props {Boolean} modelValue - Значение чекбокса
 */
export default {
  name: 'VCheckbox',
  emits: ['update:value'],
  props:{
    /**
     * Заголовок чекбокса
     */
    title: {
      type: String,
      required: false,
      default: ''
    },
    /**
     * Значение чекбокса
     */
    value: {
      type: Boolean,
      required: false,
      default: false
    }
  },
}

</script>

<style lang="scss" scoped src="./v-checkbox.scss" />