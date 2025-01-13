<template>
  <div class="layout-auth">
    <div class="layout-auth__background"></div>
    <div class="layout-auth__main">
      <router-view />
      <v-loader v-if="loading" />
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/store/auth/auth';
import { storeToRefs } from 'pinia';
import VLoader from '@components/ui/v-loader/v-loader.vue';

const { loading } = storeToRefs(useAuthStore())
</script>

<style lang="scss" scoped src="./layout-auth.scss" />