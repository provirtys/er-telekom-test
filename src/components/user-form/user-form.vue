<template>
  <form @submit.prevent="$emit('submit', { email, password })" class="auth-form">
    <p v-if="title" class="auth-form__title">{{ title }}</p>
    <div class="auth-form__fields">
      <div class="auth-form__field-group">
        <v-input v-model="email" type="email" label="Email" />
      </div>
      <div class="auth-form__field-group">
        <v-input v-model="password" type="password" label="Password" />
      </div>
    </div>
    <v-button class="auth-form__submit">{{ btnText }}</v-button>
  </form>
</template>

<script>
import { defineComponent, ref } from 'vue';
import VButton from '@components/ui/v-button/v-button.vue';
import VInput from '@ui/v-input/v-input.vue';

/**
 * Компонент формы пользователя. Используется при регистрации и авторизации пользователя
 * 
 * @props {String} title - Заголовок формы
 * @props {String} btnText - Текст кнопки отправки
 * 
 * @emits {submit} - Событие отправки формы
 * 
 * @example <user-form title="Вход" btnText="Войти" @submit="signInHandler" />
 */
export default defineComponent({
  name: 'UserForm',
  components: {
    VInput,
    VButton
  },
  props: {
    /**
     * Заголовок формы
     */
    title: {
      type: String,
      required: false,
      default: '',
    },
    /**
     * Текст кнопки отправки
     */
    btnText: {
      type: String,
      required: false,
      default: 'Отправить',
    }
  },
  emits: ['submit'],
  setup(_, { emit }) {
    const email = ref('');
    const password = ref('');

    const handleSubmit = () => {
      emit('submit', { email: email.value, password: password.value });
    };

    return {
      email,
      password,
      handleSubmit,
    };
  }
});
</script>

<style lang="scss" scoped src="./user-form.scss" />
