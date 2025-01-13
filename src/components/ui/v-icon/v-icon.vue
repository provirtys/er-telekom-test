<template>
  <svg :height="height ?? size" :width="width ?? size" aria-hidden="true" class="icon">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script setup>

defineProps({
  width: String | Number,
  height: String | Number,
  size: String | Number,
  name: String,
})

</script>

<style lang="scss" scoped src="./v-icon.scss" />
