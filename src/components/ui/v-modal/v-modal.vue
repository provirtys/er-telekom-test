<template>
  <teleport to="body">
    <transition :name="transitionName">
      <div v-if="isOpen" :class="classes"  ref="modalRef">
        <div class="modal__backdrop" @click="closeModal"></div>
        <div class="modal__content">
          <slot />
        </div>
        <button v-if="closable" class="modal__close" @click="closeModal">&times;</button>
        <div v-if="loading" class="modal__loader">
          <v-loader />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue';
import { onClickOutside } from '@vueuse/core';
import VLoader from '@ui/v-loader/v-loader.vue';

/**
 * Компонент для отображения модального окна
 * 
 * @props {String} type - Тип модального окна. Поддерживаются: `overlay`, `side`. По умолчанию `overlay`
 * Overlay - показывает окно на весь экран. В этом случае добавляется затемнение, можно закрыть окно нажав по нему.
 * Side - показывает окно справа.
 * @props {Boolean} closable - Показывает кнопку закрытия окна справа вверху. По умолчанию `true`
 * @props {Boolean} isOpen - Служит для показа модалки. True - окно показывается, false - скрывается.
 * @props {Boolean} loading - Показывает индикатор загрузки.
 * @props {Boolean} closeOutside - Позволяет закрыть окно нажав вне его. По умолчанию `false`. Работает, если `type` = `side`\
 * @props {String} size - Размер модального окна. Поддерживаются: `small`, `normal`. По умолчанию `normal`
 * 
 * @emits {closeModal} Событие закрытия модального окна
 * 
 * @example 
 * <v-modal type="overlay" :isOpen="isOpen" @closeModal="isOpen = false" :loading="loading">Контент</v-modal>
 * <v-modal type="side" :isOpen="isOpen" @closeModal="isOpen = false" :loading="loading" close-outside>Контент</v-modal>
 */
export default defineComponent({
  name: 'VModal',
  components: {
    VLoader,
  },
  props: {
    /**
     * Тип модального окна. Поддерживаются: `overlay`, `side`. По умолчанию `overlay`
     */
    type: {
      type: String,
      default: 'overlay',
      required: false,
      validator: (value) => ['overlay', 'side'].includes(value),
    },
    /**
     * Показывает кнопку закрытия окна справа вверху. По умолчанию `true`
     */
    closable: {
      type: Boolean,
      default: true,
      required: false,
    },
    /**
     * Отвечает за отображение модального окна. True - окно показывается, false - скрывается.
     */
    isOpen: {
      type: Boolean,
      default: false,
      required: false,
    },
    /**
     * Показывает индикатор загрузки.
     */
    loading: {
      type: Boolean,
      default: false,
      required: false,
    },
    /**
     * Позволяет закрыть окно нажав вне его. По умолчанию `false`. Работает, если `type` = `side`
     */
    closeOutside: {
      type: Boolean,
      default: false,
      required: false,
    },
    /**
     * Размер модального окна. Поддерживаются: `small`, `normal`. По умолчанию `normal`
     */
    size: {
      type: String,
      default: 'normal',
      required: false,
      validator: (value) => ['small', 'normal'].includes(value),
    }
  },
  emits: ['closeModal'],
  setup(props, { emit, attrs }) {
    const modalRef = ref(null);

    const classes = computed(() => [
      'modal',
      {
        'modal--side': props.type === 'side',
        'modal--transparent': props.type === 'overlay',
        'modal--small': props.size === 'small',
      },
      attrs.class
    ]);

    const transitionName = computed(() => (props.type === 'side' ? 'fade-side' : 'fade'));

    const closeModal = () => {
      emit('closeModal');
    };

    onMounted(() => {
      if (props.closeOutside) {
        onClickOutside(modalRef, closeModal);
      }
    });

    return {
      modalRef,
      classes,
      transitionName,
      closeModal,
    };
  },
});
</script>

<style scoped lang="scss" src="./v-modal.scss" />
