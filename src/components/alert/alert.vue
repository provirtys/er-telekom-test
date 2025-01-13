<template>
  <teleport to="body">
    <transition name="alert">
      <div v-if="showAlert" :class="classes" ref="alertRef">
        <p class="alert__title">{{ alert.title }}</p>
        <p class="alert__text">{{ alert.text }}</p>
        <span class="alert__close" @click="clearAlert">&times;</span>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { useAlertStore } from '@store/alert/alert'
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';

const alertStore = useAlertStore()
const { alert } = storeToRefs(alertStore)
const { clearAlert } = alertStore
const alertRef = ref('')

const showAlert = computed(() => alert.value && !!Object.keys(alert.value).length)

const classes = computed(() => [
  'alert',
  alert.value?.type,
])

</script>

<style lang='scss' src='./alert.scss' scoped />