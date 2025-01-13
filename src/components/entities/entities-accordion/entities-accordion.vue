<template>
  <v-accordion v-for="item in items" :key="item.id" class="entities-accordion" :title="item.name" :expandable="!!item.items?.length">
    <template v-if="item.items?.length">
      <entities-accordion :items="item.items" @action="emitAction" />
    </template>
    <template v-if="showInfoIcon(item)" #title-action>
      <v-popup v-model="popupStates[item.id + 'info']" vertical-offset="-30" horizontal-offset="40">
        <template #trigger>
          <v-icon class="entities-accordion__info-icon" name="info" width="24" height="24" />
        </template>
        <div class="entities-accordion__info">
          <ul class="entities-accordion__info-list">
            <li v-for="info in getInfoList(item)" :key="info.key" class="entities-accordion__info-item">
              <b>{{ info.label }}</b>: {{ info.value }}
            </li>
          </ul>
        </div>
      </v-popup>
    </template>

    <template #actions>
      <v-popup v-model="popupStates[item.id]" vertical-offset="-30" horizontal-offset="40">
        <template #trigger>
          <button class="entities-accordion__menu-btn">
            <v-icon class="entities-accordion__menu-icon" name="vertical-dots" width="24" height="24" />
          </button>
        </template>
        <div class="entities-accordion__actions">
          <ul class="entities-accordion__actions-list">
            <li v-if="showAddAction" class="entities-accordion__action" @click="emitAction('add', item)">Добавить</li>
            <li class="entities-accordion__action" @click="emitAction('edit', item)">Изменить</li>
            <li class="entities-accordion__action" @click="emitAction('delete', item)">Удалить</li>
            <li class="entities-accordion__action" @click="emitAction('equipment', item)">Оборудование</li>
          </ul>
        </div>
      </v-popup>
    </template>
  </v-accordion>
  <v-button v-if="showAddBtn" class="entities-accordion__add-city"
    @click="emitAction('add', { type: 'country' })">Добавить город</v-button>
</template>

<script setup>
import { reactive, computed } from 'vue';
import VAccordion from '@ui/v-accordion/v-accordion.vue';
import VPopup from '@ui/v-popup/v-popup.vue';
import VIcon from '@ui/v-icon/v-icon.vue';
import VButton from '@ui/v-button/v-button.vue';
import { entityFields } from '@components/entities/entity';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(['action']);

const popupStates = reactive({});

const showAddAction = computed(() => props.items[0].type !== 'entrance')

const showAddBtn = computed(() => props.items[0].type === 'city')

const showInfoIcon = (data) => {
  return Object.keys(entityFields).some(key => {
    if (key !== 'name' && data[key]) {
      return true
    }
    return false
  })
}

const getInfoList = (item) => {
  return Object.entries(entityFields)
    .filter(([key]) => key !== 'name' && item[key] !== undefined && item[key] !== '')
    .map(([key, field]) => {
      let value = item[key];
      if (typeof value === 'boolean') {
        value = value ? 'Да' : 'Нет';
      }
      return {
        key,
        label: field.label,
        value
      };
    });
};
const emitAction = (action, item) => {
  popupStates[item.id] = false
  emit('action', action, item);
};
</script>

<style lang="scss" scoped src="./entities-accordion.scss" />
