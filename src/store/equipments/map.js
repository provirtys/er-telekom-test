import { QueryDocumentSnapshot } from 'firebase/firestore';
import './types'
/**
 * Маппинг оборудования для взаимодействия с приложением
 * @param {QueryDocumentSnapshot} doc 
 * @returns {Equipment}
 */
export function mapEquipment(doc) {
  const data = doc.data();
  
  return {
    id: doc.id,
    name: data.name,
    installDate: data.installDate?.seconds,
    status: data.status,
    responsible: data.responsible,
  };
}