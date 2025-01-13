export function mapEquipment(doc) {
  const data = doc.data();
  const res = {
    id: doc.id,
    name: data.name,
    installDate: data.installDate?.seconds,
    status: data.status,
    responsible: data.responsible
  }
  
  return res;
}