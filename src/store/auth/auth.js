import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { defineStore } from 'pinia';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAlertStore } from '@store/alert/alert';
import '@store/alert/types';
import { SIGN_UP_ERRORS, SIGN_IN_ERRORS } from './errors';
import './types'

/**
 * Store для управления регистрацией и авторизацией
 */
export const useAuthStore = defineStore('auth', () => {
  const { createAlert } = useAlertStore();
  const router = useRouter();

  /**
   * Текущий пользователь
   * 
   * @type {import('firebase/auth').User | null}
   */
  const currentUser = ref(null);

  /**
   * Флаг загрузки
   * 
   * @type {import('vue').Ref<boolean>}
   */
  const loading = ref(false);

  /**
   * Функция для входа в систему
   * 
   * @param {UserData} data Данные для входа
   * 
   * @returns {Promise<void>}
   */
  const signIn = async (data) => {
    loading.value = true;
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        createAlert({ title: 'Успешно', text: 'Вы успешно вошли в систему', type: 'primary' });
        router.push('/');
      })
      .catch((error) => {
        createAlert({
          title: 'Ошибка',
          text: SIGN_IN_ERRORS[error.code] || 'Что-то пошло не так :(',
          type: 'danger'
        });
      });
    loading.value = false;
  };

  /**
   * Функция для регистрации в системе
   * 
   * @param {UserData} data Данные для регистрации
   * 
   * @returns {Promise<void>}
   */
  const signUp = async (data) => {
    loading.value = true;
    await createUserWithEmailAndPassword(getAuth(), data.email, data.password)
      .then(() => {
        createAlert({
          title: 'Успешно',
          text: 'Вы успешно зарегистрировались и вошли в систему',
          type: 'primary'
        });
        router.push('/');
      })
      .catch((error) => {
        createAlert({
          title: 'Ошибка',
          text: SIGN_UP_ERRORS[error.code] || 'Что-то пошло не так :(',
          type: 'danger'
        });
      });
    loading.value = false;
  };

  return {
    currentUser,
    loading,
    signIn,
    signUp
  };
});
