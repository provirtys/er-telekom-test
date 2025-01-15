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

<script>
import { defineComponent, ref, reactive, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import { onClickOutside } from '@vueuse/core';

/**
 * Компонент для отображения попапа
 * 
 * @props {Boolean} modelValue - Отвечает за отображение попапа. True - показывается, false - скрывается.
 * @props {Number} verticalOffset - Отвечает за смещение попапа по вертикали. По умолчанию `0`.
 * @props {Number} horizontalOffset - Отвечает за смещение попапа по горизонтали. По умолчанию `0`.
 * @props {Boolean} active - Отвечает будет ли попап переключаться.
 * 
 * @emits {update:modelValue} - Событие обновления значения
 * 
 * @example <v-popup v-model="isOpen" vertical-offset="-30" horizontal-offset="40">

 */
export default defineComponent({
  name: 'VPopup',
  props: {
    /**
     * Отвечает за отображение попапа. True - показывается, false - скрывается
     */
    modelValue: {
      type: Boolean,
      default: false,
      required: false
    },
    /**
     * Отвечает за смещение попапа по вертикали. По умолчанию `0`
     */
    verticalOffset: {
      type: [String, Number],
      default: 0,
      required: false
    },
    /**
     * Отвечает за смещение попапа по горизонтали. По умолчанию `0`
     */
    horizontalOffset: {
      type: [String, Number],
      default: 0,
      required: false
    },
    /**
     * Будет ли попап переключаться
     */
    active: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const popup = ref(null);
    const triggerElement = ref(null);
    const popupStyle = reactive({
      top: '0px',
      left: '0px',
    });

    const isOpen = ref(props.modelValue);

    const togglePopup = async () => {
      if (!props.active) return;

      isOpen.value = !isOpen.value;
      emit('update:modelValue', isOpen.value);
      if (isOpen.value) {
        await nextTick();
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

    watch(() => props.modelValue, (newValue) => {
      isOpen.value = newValue;
    });

    onClickOutside(popup, (event) => {
      if (triggerElement.value && !triggerElement.value.contains(event.target)) {
        isOpen.value = false;
        emit('update:modelValue', false);
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

    return {
      popup,
      triggerElement,
      popupStyle,
      togglePopup,
      isOpen,
    };
  }
});
</script>

<style scoped lang="scss" src="./v-popup.scss" />
