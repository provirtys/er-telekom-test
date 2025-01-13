import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAlertStore = defineStore('alert', () => {
  const alert = ref(null);
  let alertTimeout = null;

  const createAlert = ({ title, text, type }, duration = 3000) => {
    alert.value = {
      title,
      text,
      type
    };

    alertTimeout = setTimeout(() => clearAlert(), duration);
  };

  const clearAlert = () => {
    alert.value = null;
    clearTimeout(alertTimeout);
  };

  return {
    alert,
    createAlert,
    clearAlert
  };
});
