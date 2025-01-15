<template>
  <user-form title="Вход" btnText="Войти" @submit="signInHandler" />
</template>

<script>
import { defineComponent } from 'vue';
import { useAuthStore } from '@store/auth/auth';
import UserForm from '@components/user-form/user-form.vue';

/**
 * Страница входа пользователя в систему
 */
export default defineComponent({
  name: 'Login',
  components: {
    UserForm
  },
  setup() {
    const { signIn } = useAuthStore();

    const signInHandler = async (data) => {
      await signIn({ email: data.email, password: data.password });
    };

    return {
      signInHandler
    };
  }
});
</script>

<style lang="scss" scoped src="./login.scss"></style>
