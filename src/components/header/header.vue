<template>
  <header class="header">
    <div class="header__container container">
      <router-link to="/" class="header__logo">
        <v-icon name="logo" width="192" height="80" />
      </router-link>
      <nav class="header__nav">
        <ul class="header__menu">
          <!-- <li class="header__menu-item">
            <router-link class="header__menu-link"></router-link>
          </li> -->
        </ul>
      </nav>
      <div class="header__actions">
        <v-button v-if="authorized" class="header__action header__logout" @click="logout">
          <span>Выйти</span>
          <v-icon name="logout" width="24" height="24"></v-icon>
        </v-button>
        <v-button v-if="!authorized" to="/login" class="header__action header__login">
          <span>Вход</span>
          <v-icon name="login" width="24" height="24"></v-icon></v-button>
        <v-button v-if="!authorized" to="/register" class="header__action header__register" type="filled">
          <span>Регистрация</span>
          <v-icon name="register" width="24" height="24"></v-icon>
        </v-button>
      </div>
    </div>
  </header>
</template>

<script setup>
import VIcon from '@components/ui/v-icon/v-icon.vue';
import VButton from '@components/ui/v-button/v-button.vue';
import { getAuth, signOut } from 'firebase/auth';
import { computed } from 'vue';
import { useAlertStore } from '@store/alert/alert'
import { useRouter } from 'vue-router';
import { useAuthStore } from '@store/auth/auth';
import { storeToRefs } from 'pinia';

const { createAlert } = useAlertStore()

const router = useRouter()

const { currentUser } = storeToRefs(useAuthStore())

const authorized = computed(() => currentUser.value)

const logout = () => {
  signOut(getAuth())
  createAlert({ title: 'Успешно', text: 'Вы вышли из системы', type: 'primary' })
  router.push('/login')
}
</script>

<style lang='scss' src='./header.scss' scoped />