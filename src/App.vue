<template>
  <Header />
  <main class="main">
    <layout-auth v-if="route.meta.layout === 'auth'" />
    <layout-main v-else />
  </main>
  <alert />
</template>

<script setup>

import LayoutMain from '@layout/layout-main/layout-main.vue'
import LayoutAuth from '@layout/layout-auth/layout-auth.vue'
import Header from '@components/header/header.vue'
import alert from '@components/alert/alert.vue';
import { useRoute } from 'vue-router';

const route = useRoute()

</script>

<style scoped />
