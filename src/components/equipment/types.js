import '@store/entities/types'

/**
 * Имена полей оборудования
 * @typedef {'id' | 'name' | 'installDate' | 'status' | 'responsible'} EquipmentFieldsName
*/

/**  
 * Опции полей оборудования
 * @typedef {{label: string, type: string, required: boolean, placeholder: string, format: boolean}} EquipmentFieldOptions
 */

/**
 * Поля оборудования
 * @typedef {Record<EquipmentFieldsName, EquipmentFieldOptions>} EquipmentFields
 */

/**
 * Действия над оборудованием
 * @typedef {'add' | 'edit' | 'delete'} EquipmentAction
 */
