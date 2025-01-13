import { defineStore } from 'pinia';
import { useFirestore } from 'vuefire';
import { collection, addDoc, query, where, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { mapEquipment } from './map';
import { useAlertStore } from '@store/alert/alert'

export const useEquipmentsStore = defineStore('equipments', () => {
  const db = useFirestore();

  const { createAlert } = useAlertStore()

  const createEquipment = async (data) => {
    try{
      await addDoc(collection(db, 'equipments'), data);
      createAlert({
        title: 'Успешно',
        text: 'Оборудование успешно добавлено',
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
  }

  const getEquipmentByEntityId = async (entityId) => {
    const q = query(collection(db, 'equipments'), where('entityId', '==', entityId));

    const querySnapshot = await getDocs(q);
    const equipments = [];

    querySnapshot.forEach((doc) => {
      equipments.push(mapEquipment(doc));
    });

    return equipments
  }

  const updateEquipment = async (data, id) => {
    try{
      await updateDoc(doc(db, 'equipments', id), data);
      createAlert({
        title: 'Успешно',
        text: 'Оборудование успешно изменено',
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
  }

  const deleteEquipment = async (id) => {
    try{
      await deleteDoc(doc(db, 'equipments', id));
      createAlert({
        title: 'Успешно',
        text: 'Оборудование успешно удалено',
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
  }

  return {
    createEquipment,
    getEquipmentByEntityId,
    updateEquipment,
    deleteEquipment
  };
});
