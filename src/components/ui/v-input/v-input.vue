<template>
  <div :class="componentClasses">
    <label v-if="label" :class="labelClasses" :for="nameComputed">{{ label }}</label>
    <input v-model="formattedValue" class="input-wrapper__input" v-bind="inputAttributes" ref="inputRef"
      @focusin="inputFocused = true" @focusout="inputFocused = false" @input="onInput" />
    <v-icon v-if="type === 'password'" name="eye" width="20" height="20" :class="iconClasses"
      @click="passwordShown = !passwordShown" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import VIcon from '@ui/v-icon/v-icon'


const props = defineProps({
  type: {
    type: String,
    default: 'text',
    required: false,
    validator(val) {
      return ['text', 'password', 'email', 'number', 'date'].includes(val)
    }
  },
  placeholder: {
    type: String,
    default: '',
    required: false
  },
  label: {
    type: String,
    default: '',
    required: false
  },
  required: {
    type: Boolean,
    default: false,
    required: false
  },
  name: {
    type: String,
    default: '',
    required: false
  },
  focused: {
    type: Boolean,
    default: false,
    required: false
  },
  format: {
    type: Boolean,
    default: false,
    required: false
  }
})

const modelValue = defineModel()

const inputFocused = ref(false)
const passwordShown = ref(false)
const inputRef = ref(null);

const inputType = computed(() => {
  if (props.type === 'password' && passwordShown.value)
    return 'text'

  return props.type
})

const labelTransformed = computed(() => !!modelValue.value || inputFocused.value)

const componentClasses = computed(() => [
  'input-wrapper',
  {
    'input-wrapper--focused': inputFocused.value
  }
])

const iconClasses = computed(() => ([
  'input-wrapper__icon',
  {
    'input-wrapper__icon--active': passwordShown.value
  }
]))

const labelClasses = computed(() => [
  'input-wrapper__label',
  {
    'input-wrapper__label--transformed': labelTransformed.value || props.type === 'date'
  }
])

const nameComputed = computed(() => {
  return props.name || `input-${Math.random().toString(36).substr(2, 9)}`;
})

const formattedValue = ref(modelValue.value || '')

const formatNumber = (value) => {
  if (!value) return ''
  const cleaned = value.toString().replace(/\s+/g, '')
  if (isNaN(Number(cleaned))) return value
  return Number(cleaned).toLocaleString('ru-RU')
}

const onInput = (event) => {
  const value = event.target.value
  if (props.format) {
    formattedValue.value = formatNumber(value)
    modelValue.value = value.replace(/\s+/g, '')
  } else {
    formattedValue.value = value
    modelValue.value = value
  }
}

watch(() => modelValue.value, (newValue) => {
  if (props.format) {
    formattedValue.value = formatNumber(newValue)
  } else {
    formattedValue.value = newValue
  }
})

const inputAttributes = computed(() => ({
  type: inputType.value,
  placeholder: props.placeholder,
  required: props.required,
  name: nameComputed.value,
  id: nameComputed.value,
}))


onMounted(() => {
  if (props.focused && inputRef.value) {
    inputRef.value.focus();
  }
})

</script>

<style lang="scss" scoped src="./v-input.scss" />
