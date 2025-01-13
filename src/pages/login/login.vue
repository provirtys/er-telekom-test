<template>
  <user-form title="Вход" btnText="Войти" @submit="signInHandler" />
</template>

<script setup>
import { useAuthStore } from '@store/auth/auth'
import UserForm from '../../components/user-form/user-form.vue';

const { signIn } = useAuthStore()

const signInHandler = async (data) => {
  await signIn({ email: data.email, password: data.password })
}

</script>

<style lang="scss" scoped src="./login.scss"></style>