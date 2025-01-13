<template>
  <form @submit.prevent="$emit('submit', { email, password })" class="auth-form">
    <p v-if="title" class="auth-form__title">{{ title }}</p>
    <div class="auth-form__fields">
      <div class="auth-form__field-group">
        <v-input v-model="email" type="email" label="Email" />
      </div>
      <div class="auth-form__field-group">
        <v-input v-model="password" type="password" label="Password" />
      </div>
    </div>
    <v-button class="auth-form__submit">{{ btnText }}</v-button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import VInput from '@ui/v-input/v-input.vue'
import VButton from '@/components/ui/v-button/v-button.vue';

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: '',
  },
  btnText: {
    type: String,
    required: false,
    default: 'Отправить',
  }
})

defineEmits(['submit'])

const email = ref('')
const password = ref('')

</script>

<style lang=" scss" scoped src="./user-form.scss" />
