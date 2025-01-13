export const entityFields = {
  name: { label: 'Название', type: 'text', required: true, placeholder: 'Введите название' },
  area: { label: 'Площадь (км²)', type: 'text', required: false, placeholder: '42', format:true },
  population: { label: 'Население (чел.)', type: 'text', required: false, placeholder: '120000', format:true },
  condition: { label: 'Состояние', type: 'text', required: false, placeholder: 'Введите состояние' },
  length: { label: 'Длина (км)', type: 'text', required: false, placeholder: '100', format:true },
  floors: { label: 'Количество этажей', type: 'number', required: false, placeholder: '16' },
  year: { label: 'Год постройки', type: 'number', required: false, placeholder: '1980' },
  apartments: { label: 'Количество квартир', type: 'number', required: false, placeholder: '20' },
  elevator: { label: 'Наличие лифта', type: 'checkbox', required: false }
};

export const entityTypeFields = {
  city: ['name', 'area', 'population'],
  district: ['name', 'area', 'population'],
  street: ['name', 'condition', 'length'],
  house: ['name', 'floors', 'year'],
  entrance: ['name', 'apartments', 'condition', 'elevator']
};

export const childrenTypes = {
  country: 'city',
  city: 'district',
  district: 'street',
  street: 'house',
  house: 'entrance',
};

export const typeKeys = {
  city: 'город',
  district: 'район',
  street: 'улицу',
  house: 'дом',
  entrance: 'подъезд'
};
