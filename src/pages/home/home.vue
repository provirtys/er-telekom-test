<template>
  <entities />
</template>

<script>
import { defineComponent } from 'vue';
import entities from '@components/entities/entities.vue';

/**
 * Главная страница приложения
 */
export default defineComponent({
  name: 'Home',
  components: {
    entities,
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped src="./home.scss"></style>
