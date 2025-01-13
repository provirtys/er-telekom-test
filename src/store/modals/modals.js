import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalsStore = defineStore('modalsStore', () => {
  const modals = ref({});

  const openModal = (id) => {
    modals.value[id] = true;
    updateBodyScroll()
  };

  const closeModal = (id) => {
    if(!modals.value[id]) return
    delete modals.value[id];
    updateBodyScroll()
  };

  const closeLastModal = () => {
    closeModal(Object.keys(modals.value)[Object.keys(modals.value).length - 1])
  };

  const updateBodyScroll = () => {
    if (Object.keys(modals.value).length > 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const escapeHandler = (e) => {
    if (e.key === 'Escape') {
      closeLastModal();
    }
  }

  const setupEscapeHandler = () => {
    document.addEventListener('keydown', escapeHandler)
  }

  const removeEscapeHandler = () => {
    document.removeEventListener('keydown', escapeHandler)
  }
  
  return {
    modals,
    openModal,
    closeModal,
    closeLastModal,
    setupEscapeHandler,
    removeEscapeHandler
  };
});
