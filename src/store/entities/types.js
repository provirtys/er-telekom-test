/**
 * Представление сущности Подъезд с backend
 * @typedef {Object} EntranceBase
 * @property {string} id
 * @property {string} houseId
 * @property {string} name
 * @property {number | null} apartments
 * @property {string | null} condition
 * @property {boolean | null} elevator
 */

/**
 * Представление сущности Дом с backend
 * @typedef {Object} HouseBase
 * @property {string} id
 * @property {string} streetId
 * @property {string} name
 * @property {number | null} floors
 * @property {number | null} year
 */

/**
 * Представление сущности Улица с backend
 * @typedef {Object} StreetBase
 * @property {string} id
 * @property {string} districtId
 * @property {string} name
 * @property {string | null} condition
 * @property {number | null} length
 */

/**
 * Представление сущности Район с backend
 * @typedef {Object} DistrictBase
 * @property {string} id
 * @property {string} cityId
 * @property {string} name
 * @property {string | null} area
 * @property {string | null} population
 */

/**
 * Представление сущности Город с backend
 * @typedef {Object} CityBase
 * @property {string} id
 * @property {string} name
 * @property {string | null} area
 * @property {string | null} population
 */

/**
 * Представление сущности Подъезд для frontend
 * @typedef {Object} EntranceAdditional
 * @property {string} type
 * 
 * @typedef {EntranceBase & EntranceAdditional} Entrance
 */

/**
 * Представление сущности Дом для frontend
 * @typedef {Object} HouseAdditional
 * @property {string} type
 * @property {Entrance[] | null} items
 * 
 * @typedef {HouseBase & HouseAdditional} House
 */

/**
 * Представление сущности Улица для frontend
 * @typedef {Object} StreetAdditional
 * @property {string} type
 * @property {House[] | null} items
 * 
 * @typedef {StreetBase & StreetAdditional} Street

 */

/**
 * Представление сущности Район для frontend
 * @typedef {Object} DistrictAdditional
 * @property {string} type
 * @property {Street[] | null} items
 * 
 * @typedef {DistrictBase & DistrictAdditional} District

 */

/**
 * Представление сущности Город для frontend
 * @typedef {object} CityAdditional
 * @property {string} type
 * @property {District[] | null} items
 * 
 * @typedef {CityBase & CityAdditional} City
 */

/**
 * Список типов сущностей во множественном числе
 * @typedef {'cities' | 'districts' | 'streets' | 'houses' | 'entrances'} EntityTypesPlural
 */

/** 
 * Список типов сущностей в единственном числе
 * @typedef {'city' | 'district' | 'street' | 'house' | 'entrance'} EntityTypesSingular
 */

/**
 * Один из типов сущности
 * @typedef {City | District | Street | House | Entrance} AnyEntity
 */

/**
 * @typedef {import('vue').ComputedRef} ComputedRef
 */