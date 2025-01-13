<template>
  <teleport to="body">
    <transition :name="transitionName">
      <div v-if="isOpen" :class="classes" ref="modalRef">
        <div class="modal__backdrop" @click="$emit('closeModal')"></div>
        <div class="modal__content">
          <slot />
        </div>
        <button v-if="closable" class="modal__close" @click="$emit('closeModal')">&times;</button>
        <div v-if="loading" class="modal__loader">
          <v-loader />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref, computed, defineProps, onMounted } from 'vue';
import VLoader from '@ui/v-loader/v-loader.vue';
import { onClickOutside } from '@vueuse/core'

const props = defineProps({
  type: {
    type: String,
    default: 'overlay',
    required: false,
    validator: (value) => ['overlay', 'side'].includes(value)
  },
  closable: {
    type: Boolean,
    default: true,
    required: false
  },
  isOpen: {
    type: Boolean,
    default: false,
    required: false
  },
  loading: {
    type: Boolean,
    default: false,
    required: false
  },
  closeOutside: {
    type: Boolean,
    default: false,
    required: false
  },
  lockBody: {
    type: Boolean,
    default: false,
    required: false
  }
})

const emit = defineEmits(['closeModal'])

const modalRef = ref(null)

const classes = computed(() => ([
  'modal',
  {
    'modal--side': props.type === 'side',
    'modal--transparent': props.type === 'overlay'
  }
]))

const transitionName = computed(() => props.type === 'side' ? 'fade-side' : 'fade')

onMounted(() => {
  if (props.closeOutside) {
    onClickOutside(modalRef, () => emit('closeModal'))
  }
})

</script>

<style scoped lang="scss" src="./v-modal.scss" />
