import { useDateFormat } from '@vueuse/core';

export const formatSecondsToDate = (seconds) => {
  if(!seconds) return
  const date = new Date(seconds * 1000)
  return useDateFormat(date, 'DD.MM.YYYY').value
}

export const formatSecondsToInputDate = (seconds) => {
  if(!seconds) return
  const date = new Date(seconds * 1000);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}