<template>
  <user-form title="Регистрация" btnText="Зарегистрироваться" @submit="signUpHandler"/>
</template>

<script setup>
import { useAuthStore } from '@/store/auth/auth';
import UserForm from '../../components/user-form/user-form.vue';

const { signUp } = useAuthStore()


const signUpHandler = async (data) => {
  await signUp({ email: data.email, password: data.password })
}
</script>

<style lang="scss" scoped src="./register.scss"></style>