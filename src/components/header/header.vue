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
          <v-icon name="logout" width="24" height="24" />
        </v-button>
        <v-button v-if="!authorized" to="/login" class="header__action header__login">
          <span>Вход</span>
          <v-icon name="login" width="24" height="24" />
        </v-button>
        <v-button v-if="!authorized" to="/register" class="header__action header__register" type="filled">
          <span>Регистрация</span>
          <v-icon name="register" width="24" height="24" />
        </v-button>
      </div>
    </div>
  </header>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { getAuth, signOut } from 'firebase/auth';
import { useAlertStore } from '@store/alert/alert';
import { useAuthStore } from '@store/auth/auth';
import VIcon from '@ui/v-icon/v-icon.vue';
import VButton from '@ui/v-button/v-button.vue';

export default defineComponent({
  name: 'HeaderComponent',
  components: {
    VIcon,
    VButton,
  },
  setup() {
    const { createAlert } = useAlertStore();
    const router = useRouter();
    const { currentUser } = storeToRefs(useAuthStore());

    /**
     * Проверка авторизованности пользователя
     * 
     * @type {import('vue').ComputedRef<import('firebase/auth').User | null>}
     */
    const authorized = computed(() => currentUser.value);

    /**
     * Выход из системы
     * 
     * @returns {void}
     */
    const logout = () => {
      signOut(getAuth());
      createAlert({ title: 'Успешно', text: 'Вы вышли из системы', type: 'primary' });
      router.push('/login');
    };

    return {
      authorized,
      logout,
    };
  },
});
</script>

<style lang="scss" src="./header.scss" scoped />
