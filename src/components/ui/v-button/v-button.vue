<template>
  <component :is="tag" :class="classes" @click="emit('click')" :to="to || null">
    <slot />
  </component>
</template>


<script>
import { computed } from 'vue'

/**
 * Компонент `v-button`
 * 
 * 
 * @example
 * <v-button>Кнопка</v-button>
 *
*/
export default {

  emits: ['click'],
  props: {
    to: {
      type: String,
      required: false
    },
    type: {
      type: String,
      required: false,
      validator(val) {
        return ['filled'].includes(val)
      }
    },
    size: {
      type: String,
      required: false,
      default: 'medium',
      validator(val) {
        return ['small', 'medium', 'big'].includes(val)
      }
    },
    color: {
      type: String,
      required: false,
      default: 'primary',
      validator(val) {
        return ['primary', 'white'].includes(val)
      }
    }
  },
  setup(props, { emit }) {
    const tag = computed(() => props.to ? 'router-link' : 'button')

    const classes = computed(() => ({
      'button': true,
      [`button--${props.type}`]: props.type,
      [`button--${props.size}`]: props.size,
      [`button--${props.color}`]: props.color
    }))

    return {
      tag,
      classes,
      emit
    }
  }

}

</script>

<style lang=" scss" scoped src="./v-button.scss" />
