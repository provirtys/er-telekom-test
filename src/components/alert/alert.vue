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

<script>
import { ref, computed, defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useAlertStore } from '@store/alert/alert'

/**
 * Компонент для отображения сообщений об ошибках и успешных операциях
 */
export default defineComponent({
  name: 'Alert',
  setup() {
    const alertStore = useAlertStore()
    const { alert } = storeToRefs(alertStore)
    const { clearAlert } = alertStore

    const alertRef = ref('')

    const showAlert = computed(() => alert.value && !!Object.keys(alert.value).length)

    const classes = computed(() => [
      'alert',
      alert.value?.type,
    ])

    return {
      alert,
      alertRef,
      showAlert,
      classes,
      clearAlert,
    }
  },
})
</script>

<style lang='scss' src='./alert.scss' scoped />
