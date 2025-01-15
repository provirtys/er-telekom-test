<template>
  <div class="loader"></div>
</template>

<script>
import { defineComponent } from 'vue';

/**
 * Компонент для отображения процесса загрузки (loader)
 * 
 * @example 
 * <div v-if="loading">Контент</div>
 * <v-loader v-else />
 */
export default defineComponent({
  name: 'VLoader',
  
});
</script>

<style lang="scss" scoped src="./v-loader.scss" />
