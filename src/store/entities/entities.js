import { computed } from 'vue';
import { useCollection, useFirestore } from 'vuefire';
import { defineStore } from 'pinia';
import { collection, doc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { useAlertStore } from '@store/alert/alert';
import { mapEntities } from './map';
import './types';

/**
 * Store для управления сущностями: города, районы, улицы, дома и подъезды.
 */
export const useEntitiesStore = defineStore('entities', () => {
  const db = useFirestore();
  const { createAlert } = useAlertStore();

  /**
   * Коллекция городов
   * @type {ComputedRef<CityBase[] | null>}
   */
  const cities = useCollection(collection(db, 'cities'));

  /**
   * Коллекция районов
   * @type {ComputedRef<DistrictBase[] | null>}
   */
  const districts = useCollection(collection(db, 'districts'));

  /**
   * Коллекция улиц
   * @type {ComputedRef<StreetBase[] | null>}
   */
  const streets = useCollection(collection(db, 'streets'));

  /**
   * Коллекция домов
   * @type {ComputedRef<HouseBase[] | null>}
   */
  const houses = useCollection(collection(db, 'houses'));

  /**
   * Коллекция подъездов
   * @type {ComputedRef<EntranceBase[] | null>}
   */
  const entrances = useCollection(collection(db, 'entrances'));

  /**
   * Состояние загрузки всех коллекций
   * @type {ComputedRef<boolean>}
   */
  const loading = computed(
    () =>
      cities.pending.value ||
      districts.pending.value ||
      streets.pending.value ||
      houses.pending.value ||
      entrances.pending.value
  );

  /**
   * Иерархический список всех вложенных сущностей.
   * @type {ComputedRef<Map<string, City> | null>}
   */
  const entities = computed(() => {
    if (loading.value) {
      return null;
    }
    return mapEntities({
      cities: cities.value,
      districts: districts.value,
      streets: streets.value,
      houses: houses.value,
      entrances: entrances.value,
    });
  });

  /**
   * Ключи типа сущность в единственном числе: сущность во множественном числе
   * @type {Record<EntityTypesSingular, EntityTypesPlural>}
   */
  const collections = {
    city: 'cities',
    district: 'districts',
    street: 'streets',
    house: 'houses',
    entrance: 'entrances',
  };

  /**
   * Создает новую сущность в указанной коллекции.
   * @param {EntityTypesSingular} typeName Тип сущности
   * @param {Entrance | House | Street | District | City} data Данные для создания сущности
   * @param {string} parentId ID родительской сущности
   * @returns {Promise<void>}
   */
  const createEntity = async (typeName, data, parentId) => {
    const entityParentKeys = {
      district: { cityId: parentId },
      street: { districtId: parentId },
      house: { streetId: parentId },
      entrance: { houseId: parentId },
    };

    const payload = { ...data, ...entityParentKeys[typeName] };

    try {
      await addDoc(collection(db, collections[typeName]), payload);
      createAlert({
        title: 'Успешно',
        text: 'Объект успешно добавлен',
        type: 'primary',
      });
    } catch (e) {
      console.log(e);
      createAlert({
        title: 'Ошибка',
        text: 'Произошла ошибка при добавлении',
        type: 'danger',
      });
    }
  };

  /**
   * Обновляет сущность.
   * @param {EntityTypesSingular} typeName Тип сущности
   * @param {Entrance | House | Street | District | City} data Данные для обновления
   * @param {string} id ID сущности
   * @returns {Promise<void>}
   */
  const updateEntity = async (typeName, data, id) => {
    try {
      await updateDoc(doc(db, collections[typeName], id), data);
      createAlert({
        title: 'Успешно',
        text: 'Объект успешно изменен',
        type: 'primary',
      });
    } catch (e) {
      console.log(e);
      createAlert({
        title: 'Ошибка',
        text: 'Произошла ошибка при изменении',
        type: 'danger',
      });
    }
  };

  /**
   * Удаляет сущность по ID.
   * @param {Entrance | House | Street | District | City} data Данные об удаляемой сущности
   * @returns {Promise<void>}
   */
  const deleteEntity = async (data) => {
    try {
      await deleteDoc(doc(db, collections[data.type], data.id));
      createAlert({
        title: 'Успешно',
        text: 'Объект успешно удален',
        type: 'primary',
      });
    } catch (e) {
      console.log(e);
      createAlert({
        title: 'Ошибка',
        text: 'Произошла ошибка при удалении',
        type: 'danger',
      });
    }
  };

  return {
    loading,
    entities,
    createEntity,
    deleteEntity,
    updateEntity,
  };
});
