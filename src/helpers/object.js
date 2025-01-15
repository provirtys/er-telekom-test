/**
 * Создать объект со значениями по умолчанию для формы
 * @param {object} obj
 *  
 * @returns {object}
 */
export const createDefaultValues = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    switch (obj[key].type) {
      case 'text':
        acc[key] = '';
        break;
      case 'number':
        acc[key] = null;
        break;
      case 'checkbox':
        acc[key] = false;
        break;
      case 'date':
        acc[key] = new Date().toISOString().split('T')[0];
        break;
    }
    return acc;
  }, {})
}

/**
 * Копирование полей из одного объекта в другой
 * @param {object} target Объект, в который копируются данные
 * @param {object} data Источник данных
 * 
 * @returns {void}
 */
export const setDataForObject = (target, data) => {
  Object.keys(target).forEach((key) => {
    target[key] = data[key] ?? '';
  });
};

/**
 * Сброс полей объекта
 * @param {object} target Объект для сброса
 * 
 * @returns {void}
 */
export const resetObject = (target) => {
  Object.keys(target).forEach(key => {
    target[key] = '';
  });
};
