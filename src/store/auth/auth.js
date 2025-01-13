import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useAlertStore } from '@store/alert/alert';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { SIGN_UP_ERRORS, SIGN_IN_ERRORS } from './errors';

export const useAuthStore = defineStore('auth', () => {
  const { createAlert } = useAlertStore();
  const router = useRouter();

  const currentUser = ref(null);
  const loading = ref(false);

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
    signIn,
    signUp,
    loading
  };
});
