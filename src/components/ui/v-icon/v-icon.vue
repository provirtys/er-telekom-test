<template>
  <svg :height="height ?? size" :width="width ?? size" aria-hidden="true" class="icon">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script>
import { defineComponent } from 'vue';

/**
 * Компонент иконки.
 * Используется в svg-sprite
 * 
 * @props {String} name - Имя иконки. Значение должно быть равно имени файла из `assets/icons`
 * @props {String} width - Ширина иконки
 * @props {String} height - Высота иконки
 * @props {String} size - Размер иконки, используется если не заданы `width` и `height`
 * 
 * @example <v-icon name="arrow-down" width="24" height="24" />
 */
export default defineComponent({
  name: 'VIcon',
  props: {
    /**
     * Ширина иконки
     */
    width: [String, Number],
    /**
     * Высота иконки
     */
    height: [String, Number],
    /**
     * Размер иконки, используется если не заданы `width` и `height`
     */
    size: {
      type: [String, Number],
      required: false,
      default: 24,
    },
    /**
     * Имя иконки. Значение должно быть равно имени файла из `assets/icons`
     */
    name: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped src="./v-icon.scss" />
