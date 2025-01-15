import '@store/entities/types'

/**
 * Имена полей сущности
 * @typedef {'name' | 'area' | 'population' | 'condition' | 'length' | 'floors' | 'year' | 'apartments' | 'elevator'} EntityFieldsName
*/

/**  
 * Опции полей сущности
 * @typedef {{label: string, type: string, required: boolean, placeholder: string, format: boolean}} EntityFieldOptions
 */

/**
 * Поля сущности
 * @typedef {Record<EntityFieldsName, EntityFieldOptions>} EntityFields
 */

/**
 * Поля сущности по типам
 * @typedef {Record<EntityTypesSingular, EntityFieldsName[]>} EntityTypes
 */

/**
 * Дочерние сущности
 * @typedef {Record<EntityTypesSingular, EntityTypesSingular>} EntityChildren
 */

/**
 * Действия над сущностью
 * @typedef {'add' | 'edit' | 'delete' | 'equipment'} EntityAction
 */
