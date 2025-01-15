<template>
  <user-form title="Регистрация" btnText="Зарегистрироваться" @submit="signUpHandler"/>
</template>

<script>
import { defineComponent } from 'vue';
import { useAuthStore } from '@store/auth/auth';
import UserForm from '@components/user-form/user-form.vue';

/**
 * Страница регистрации пользователя в системе
 */
export default defineComponent({
  name: 'Register',
  components: {
    UserForm
  },
  setup() {
    const { signUp } = useAuthStore();

    const signUpHandler = async (data) => {
      await signUp({ email: data.email, password: data.password });
    };

    return {
      signUpHandler
    };
  }
});
</script>

<style lang="scss" scoped src="./register.scss"></style>
