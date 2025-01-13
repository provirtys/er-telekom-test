<template>
  <div :class="$attrs.class" ref="triggerElement" @click.stop="togglePopup">
    <slot name="trigger" />
  </div>
  <teleport to="body">
    <transition name="fade">
      <div v-if="modelValue" ref="popup" class="popup" :style="popupStyle">
        <slot />
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref, reactive, onMounted, onBeforeUnmount, defineProps } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { nextTick } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
    required: false
  },
  verticalOffset: {
    type: [String, Number],
    default: 0,
    required: false
  },
  horizontalOffset: {
    type: [String, Number],
    default: 0,
    required: false
  },
  active: {
    type: Boolean,
    default: true,
    required: false
  }
})
const isOpen = defineModel();

const popup = ref(null);
const triggerElement = ref(null);
const popupStyle = reactive({
  top: '0px',
  left: '0px',
});

const togglePopup = async () => {
  if (!props.active) return

  isOpen.value = !isOpen.value;
  if (!isOpen.value) {
    await nextTick()
    updatePosition();
  }
};

const updatePosition = async () => {
  if (triggerElement.value && popup.value) {
    const triggerRect = triggerElement.value.getBoundingClientRect();
    const popupRect = popup.value.getBoundingClientRect();

    let top = triggerRect.bottom + window.scrollY + +props.verticalOffset;
    let left = triggerRect.left + window.scrollX + +props.horizontalOffset;

    const screenWidth = document.body.offsetWidth;
    const popupRightEdge = left + popupRect.width;

    if (popupRightEdge > screenWidth) {
      left = screenWidth - popupRect.width - 10;
    }

    popupStyle.top = `${top}px`;
    popupStyle.left = `${left}px`;
  }
};


onClickOutside(popup, (event) => {
  if (triggerElement.value && !triggerElement.value.contains(event.target)) {
    isOpen.value = false;
  }
});

onMounted(() => {
  updatePosition();
  window.addEventListener('scroll', updatePosition);
  window.addEventListener('resize', updatePosition);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updatePosition);
  window.removeEventListener('resize', updatePosition);
});

</script>

<style scoped lang="scss" src="./v-popup.scss" />
