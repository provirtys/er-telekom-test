import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useCollection, useFirestore } from 'vuefire';
import { collection, doc, addDoc, deleteDoc, updateDoc} from 'firebase/firestore';
import { mapEntities } from './map';
import { useAlertStore } from '@store/alert/alert'

export const useEntitiesStore = defineStore('entities', () => {
  const db = useFirestore();

  const { createAlert } = useAlertStore()

  // Используем useCollection для загрузки коллекций
  const cities = useCollection(collection(db, 'cities'));
  const districts = useCollection(collection(db, 'districts'));
  const streets = useCollection(collection(db, 'streets'));
  const houses = useCollection(collection(db, 'houses'));
  const entrances = useCollection(collection(db, 'entrances'));

  // Следим за состоянием загрузки всех коллекций
  const loading = computed(() =>
    cities.pending.value ||
    districts.pending.value || 
    streets.pending.value || 
    houses.pending.value || 
    entrances.pending.value
  );

  // Вызываем mapEntities только после загрузки всех данных
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

  const collections = {
    city:'cities',
    district:'districts',
    street:'streets',
    house:'houses',
    entrance:'entrances'
  }

  const createEntity = async (typeName, data, parentId) => {
    loading.value = true;
    const entityParentKeys = {
      district: {cityId: parentId},
      street: {districtId: parentId},
      house: {streetId: parentId},
      entrance: {houseId: parentId}
    }

    const payload = {...data,...entityParentKeys[typeName]}

    try {
      await addDoc(collection(db, collections[typeName]), payload);
      createAlert({
        title: 'Успешно',
        text: 'Объект успешно добавлен',
        type: 'primary'
      });
    }
    catch(e){
      console.log(e);
      createAlert({
        title: 'Ошибка',
        text: 'Произошла ошибка при добавлении',
        type: 'danger'
      });
    }
    loading.value = false;
  };

  const updateEntity = async (typeName, data, id) => {
    loading.value = true;
    try{
      await updateDoc(doc(db, collections[typeName], id), data);
      createAlert({
        title: 'Успешно',
        text: 'Объект успешно изменен',
        type: 'primary'
      });
    }
    catch(e){
      console.log(e);
      createAlert({
        title: 'Ошибка',
        text: 'Произошла ошибка при изменении',
        type: 'danger'
      });
    }
    loading.value = false;
  }

  const deleteEntity = async (data) => {
    loading.value = true;
    try{
      await deleteDoc(doc(db, collections[data.type], data.id));
      createAlert({
        title: 'Успешно',
        text: 'Объект успешно удален',
        type: 'primary'
      });
    }
    catch(e){
      console.log(e);
      createAlert({
        title: 'Ошибка',
        text: 'Произошла ошибка при удалении',
        type: 'danger'
      });
    }
    loading.value = false;
  }

  return {
    loading,
    entities,
    createEntity,
    deleteEntity,
    updateEntity,
  };


});
