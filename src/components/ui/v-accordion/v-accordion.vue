<template>
  <div :class="classes">
    <div class="accordion__header" @click="toggleHandler">
      <div class="accordion__header-content">
        <div class="accordion__title">
          {{ title }}
        </div>
        <slot name="title-action"></slot>
      </div>
      <div class="accordion__header-additional">
        <button v-if="expandable" class="accordion__arrow-btn">
          <v-icon class="accordion__arrow-icon" name="arrow-down" width="24" height="24" />
        </button>
        <slot name="actions">
        </slot>
      </div>
    </div>
    <div class="accordion__content">
      <div class="accordion__content-container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import VIcon from '@ui/v-icon/v-icon.vue';
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  expandable: {
    type: Boolean,
    default: true,
    required: false
  }
})

const isOpen = defineModel(false)

const classes = computed(() => ([
  'accordion',
  {
    'accordion--open': isOpen.value,
    'accordion--expandable': props.expandable
  }
]))

const toggleHandler = () => {
  if (!props.expandable) return
  isOpen.value = !isOpen.value
}

</script>

<style lang=" scss" scoped src="./v-accordion.scss" />
