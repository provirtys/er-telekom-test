import { ref } from 'vue';
import { defineStore } from 'pinia';
import './types'

/**
 * Store для управления сообщениями об успешных (и не очень) операциях
 * @typedef {Object} MyStore
 *  @property {import('vue').Ref<Alert | null>} alert - Счетчик
 * 
 * @returns {MyStore} 
 *
 */
export const useAlertStore = defineStore('alert', () => {

  /**
   * Объект сообщения
   * 
   * @type {Alert}
   */
  const alert = ref(null);

  /**
   * Таймер сообщения
   * 
   * @type {number | null}
   */
  let alertTimeout = null;

  /**
   * 
   * @param {AlertOptions} alertOptions - Опции сообщения (заголовок, текст и тип)
   * @param {number} duration - Продолжительность показа сообщения
   * @returns {void}
   */
  const createAlert = ({ title, text, type }, duration = 3000) => {
    alert.value = {
      title,
      text,
      type
    };

    alertTimeout = setTimeout(() => clearAlert(), duration);
  };

  /**
   * Очистка сообщения
   * @returns {void}
   */
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
