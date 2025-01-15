<template>
  <div :class="classes">
    <div class="accordion__header" @click="toggleHandler">
      <div class="accordion__header-content">
        <div class="accordion__title">
          {{ title }}
        </div>
        <slot name="title-action"></slot>
      </div>
      <div class="accordion__header-additional">
        <button v-if="expandable" class="accordion__arrow-btn">
          <v-icon class="accordion__arrow-icon" name="arrow-down" width="24" height="24" />
        </button>
        <slot name="actions"></slot>
      </div>
    </div>
    <div class="accordion__content">
      <div class="accordion__content-container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, defineComponent } from 'vue';
import VIcon from '@ui/v-icon/v-icon.vue';

/**
 * Компонент аккордеона.
 * Используется для скрытия и показа содержимого по клику на заголовок.
 *
 * @slot default - Основное содержимое аккордеона.
 * @slot title-action - Дополнительное содержимое рядом с заголовком.
 * @slot actions - Действия, отображаемые справа от заголовка.
 *
 * @props {String} title - Заголовок аккордеона.
 * @props {Boolean} expandable - Флаг, указывающий, можно ли сворачивать/разворачивать аккордеон.
 *                              Если `false`, аккордеон будет всегда свернут, а иконка скрыта.
 * @props {Boolean} modelValue - Управляет открытым или закрытым состоянием аккордеона.
 *
 * @emits {update:modelValue} Событие обновления состояния аккордеона (открыт/закрыт).
 */
export default defineComponent({
  name: 'VAccordion',
  components: {
    VIcon,
  },
  props: {
    /**
     * Заголовок аккордеона.
     */
    title: {
      type: String,
      required: true,
    },
    /**
     * Флаг, указывающий, можно ли сворачивать/разворачивать аккордеон.
     * Если `false`, аккордеон будет всегда скрыт, а иконка скрыта.
     */
    expandable: {
      type: Boolean,
      required: false,
      default: true,
    },
    /**
     * Управляет открытым или закрытым состоянием аккордеона.
     */
    modelValue: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const isOpen = ref(props.modelValue);

    const classes = computed(() => [
      'accordion',
      {
        'accordion--open': isOpen.value,
        'accordion--expandable': props.expandable,
      },
    ]);

    const toggleHandler = () => {
      if (!props.expandable) return;
      isOpen.value = !isOpen.value;
      emit('update:modelValue', isOpen.value);
    };

    return {
      classes,
      isOpen,
      toggleHandler,
    };
  },
});
</script>

<style lang="scss" scoped src="./v-accordion.scss" />
