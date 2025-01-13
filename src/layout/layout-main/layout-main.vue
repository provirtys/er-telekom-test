<template>
  <div class="layout-main">
    <div class="layout-main__container container">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useModalsStore } from '@store/modals/modals';

const {setupEscapeHandler, removeEscapeHandler} = useModalsStore();

onMounted(() => {
  setupEscapeHandler()
})

onUnmounted(() => {
  removeEscapeHandler()
})
</script>

<style lang="scss" scoped src="./layout-main.scss" />