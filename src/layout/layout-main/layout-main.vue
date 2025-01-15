<template>
  <div class="layout-main">
    <div class="layout-main__container container">
      <router-view />
    </div>
    <div class="hotkeys-btn" @click="openModal('hotkeys')">
      <v-icon class="hotkeys-btn__icon" name="keyboard" size="40" />
    </div>
    <v-modal class="hotkeys-modal" v-model:isOpen="isOpenHotkeys" size="small" @close-modal="closeModal('hotkeys')">
      <div class="hotkeys-modal__content">
        <div class="hotkeys-modal__title">Горячие клавиши</div>
        <div class="hotkeys-modal__items">
          <div class="hotkeys-modal__item">
            <v-icon class="hotkeys-modal__item-icon" name="enter" size="60" />
            <div class="hotkeys-modal__item-text">(Enter) отправить форму</div>
          </div>
          <div class="hotkeys-modal__item">
            <v-icon class="hotkeys-modal__item-icon" name="esc" size="60" />
            <div class="hotkeys-modal__item-text">(Escape) закрыть модальное окно/форму</div>
          </div>
        </div>
      </div>
    </v-modal>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, computed } from 'vue';
import { useModalsStore } from '@store/modals/modals';
import VIcon from '@ui/v-icon/v-icon.vue';
import VModal from '@ui/v-modal/v-modal.vue';

export default defineComponent({
  name: 'LayoutMain',
  components: {
    VIcon,
    VModal
  },
  setup() {
    const { setupEscapeHandler, removeEscapeHandler } = useModalsStore();

    const modalsStore = useModalsStore();
    const { openModal, closeModal } = modalsStore;

    /**
 * Флаг открытия модального окна `hotkeys`
 * @type {import('vue').ComputedRef<boolean>}
 */
    const isOpenHotkeys = computed(() => modalsStore.modals['hotkeys']);

    onMounted(() => {
      setupEscapeHandler();
    });

    onUnmounted(() => {
      removeEscapeHandler();
    });

    return {
      isOpenHotkeys,
      openModal,
      closeModal
    };
  }
});
</script>

<style lang="scss" scoped src="./layout-main.scss" />
