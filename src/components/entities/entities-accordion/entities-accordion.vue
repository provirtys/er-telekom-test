<template>
  <v-accordion v-for="item in items" :key="item.id" class="entities-accordion" :title="item.name"
    :expandable="!!item.items?.length">
    <template v-if="item.items?.length">
      <entities-accordion :items="item.items" @action="emitAction" :itemsType="childrenTypes[item.type]" />
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
            <li v-if="showAddAction" class="entities-accordion__action" @click="emitAction('add', item)">
              {{ addActionText }}
            </li>
            <li class="entities-accordion__action" @click="emitAction('edit', item)">Изменить</li>
            <li class="entities-accordion__action" @click="emitAction('delete', item)">Удалить</li>
            <li class="entities-accordion__action" @click="emitAction('equipment', item)">Оборудование</li>
          </ul>
        </div>
      </v-popup>
    </template>
  </v-accordion>

  <v-button v-if="showAddBtn" class="entities-accordion__add-city" @click="emitAction('add', { type: 'country' })">
    Добавить город
  </v-button>
</template>

<script>
import { reactive, computed, defineComponent } from 'vue'
import VAccordion from '@ui/v-accordion/v-accordion.vue'
import VPopup from '@ui/v-popup/v-popup.vue'
import VIcon from '@ui/v-icon/v-icon.vue'
import VButton from '@ui/v-button/v-button.vue'
import { entityFields, typeKeys, childrenTypes } from '@components/entities/entity'
import '../types'

/**
 * Компонент аккордиона для основных сущностей (города, районы, улицы, дома, подъезды)
 * 
 * @props {Array} items - Список сущностей
 * @props {String} itemsType - Тип сущности. Поддерживаются: `country`, `city`, `district`, `street`, `house`, `entrance`
 * 
 * @emits {action} Событие при выборе действия в попапе (Добавить, Изменить, Удалить, Оборудование). Эмитит два параметра: action и item, у которого выбрали действие
 * 
 * @example <entities-accordion :items="cities" @action="handleAction" itemsType="city" />
 */
export default defineComponent({
  name: 'EntitiesAccordion',
  components: { VAccordion, VPopup, VIcon, VButton },
  props: {
    items: {
      type: Array,
      required: true,
    },
    /**
     * Тип сущности. Поддерживаются: `country`, `city`, `district`, `street`, `house`, `entrance`
     */
    itemsType: {
      type: String,
      required: true,
      validator: (value) => ['country', 'city', 'district', 'street', 'house', 'entrance'].includes(value),
    }
  },
  emits: ['action'],
  setup(props, { emit }) {
    /**
     * Состояния попапов
     * @type {import('vue').Reactive<Record<string, boolean>>}
     */
    const popupStates = reactive({})

    /**
     * Показывать ли кнопку "Добавить"
     * @type {import('vue').ComputedRef<boolean>}
     */
    const showAddAction = computed(() => props.itemsType !== 'entrance')

    /**
     * Показывать ли кнопку "Добавить город"
     * @type {import('vue').ComputedRef<boolean>}
     */
    const showAddBtn = computed(() => props.itemsType === 'city')

    /**
     * Текст кнопки "Добавить"
     * @type {import('vue').ComputedRef<string>}
     */
    const addActionText = computed(() => `Добавить ${typeKeys[childrenTypes[props.itemsType]]}`)

    /**
     * Показывать ли иконку информации
     * @param {import('../types').EntityFields} data - Данные сущности
     * @returns {boolean}
     */
    const showInfoIcon = (data) => {
      return Object.keys(entityFields).some((key) => {
        if (key !== 'name' && data[key]) {
          return true
        }
        return false
      })
    }

    /**
     * Получить информацию по сущности
     * @param {AnyEntity} item 
     * 
     * @returns {Array<{key: string, label: string, value: string}>}
     */
    const getInfoList = (item) => Object.entries(entityFields)
      .filter(([key]) => key !== 'name' && item[key] !== undefined && item[key] !== '')
      .map(([key, field]) => {
        let value = item[key]
        if (typeof value === 'boolean') {
          value = value ? 'Да' : 'Нет'
        }
        return {
          key,
          label: field.label,
          value,
        }
      })

    /**
     * Вызов события в родительском компоненте
     * @param {string} action 
     * @param {AnyEntity} item 
     */
    const emitAction = (action, item) => {
      popupStates[item.id] = false
      emit('action', action, item)
    }

    return {
      popupStates,
      showAddAction,
      showAddBtn,
      addActionText,
      childrenTypes,
      showInfoIcon,
      getInfoList,
      emitAction
    }
  },
})
</script>

<style lang="scss" scoped src="./entities-accordion.scss" />
