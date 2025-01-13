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
