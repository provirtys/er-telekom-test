<template>
  <div class="layout-auth">
    <div class="layout-auth__background"></div>
    <div class="layout-auth__main">
      <router-view />
      <v-loader v-if="loading" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@store/auth/auth';
import VLoader from '@ui/v-loader/v-loader.vue';

export default defineComponent({
  name: 'LayoutAuth',
  components: {
    VLoader
  },
  setup() {
    const authStore = useAuthStore();
    const { loading } = storeToRefs(authStore);

    return {
      loading
    };
  }
});
</script>

<style lang="scss" scoped src="./layout-auth.scss" />
