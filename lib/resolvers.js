import { properties, values } from './lexicon';
import { SCALE, UNIT } from './scale';

/**
  * @function createScaledPropertyGetter
  * @desc Resolve method for scaled properties
  * @param {String} property - CSS property
  * @param {Number} value - scale index
  * @param {String} unit - CSS length unit
  * @param {Array} [scale=SCALE] - modular scale
  * @returns {Object} Returns a scaled CSS attribute
*/
const createScaledPropertyGetter = (property, value, unit, scale = SCALE) =>
  typeof value === 'number' &&
    typeof scale[value] === 'number' &&
    typeof properties[property] === 'string'
    ? { [`${properties[property]}`]: `${scale[value]}${unit}` }
    : null;

/**
  * @function createComputedPropertyGetter
  * @desc Resolve method for scaled properties
  * @param {String} property - CSS property
  * @param {Number} value - CSS length value
  * @param {String} unit - CSS length unit
  * @returns {Object} Returns a computed CSS attribute
*/
const createComputedPropertyGetter = (property, value, unit) =>
  typeof value === 'number' && typeof properties[property] === 'string'
    ? { [`${properties[property]}`]: `${value}${unit}` }
    : null;

/**
  * @function createStaticPropertyGetter
  * @desc Resolve method for scaled properties
  * @param {String} property - CSS property
  * @param {Number} value - CSS value
  * @returns {Object} Returns a static CSS attribute
*/
const createStaticPropertyGetter = (property, value) =>
  typeof properties[property] === 'string' &&
    typeof values[property] === 'object' &&
    typeof values[property][value] !== 'undefined'
    ? { [`${properties[property]}`]: `${values[property][value]}` }
    : null;

/**
  * @function createActualPropertyGetter
  * @desc Resolve method for scaled properties
  * @param {String} property - CSS property
  * @param {Number} value - CSS value
  * @returns {Object} Returns an actual CSS attribute
*/
const createActualPropertyGetter = (property, value) =>
  typeof properties[property] === 'string'
    ? { [`${properties[property]}`]: value }
    : null;

/**
  * @function getScaledProperty
  * @desc Resolve method creator for scaled properties
  * @param {String} property - CSS property
  * @param {Number} value - scale index
  * @param {String} [unit=UNIT] - CSS length unit
  * @returns {Object} Returns the result of `createScaledPropertyGetter`
*/
export const getScaledProperty = (property, value, unit = UNIT) =>
  createScaledPropertyGetter(property, value, unit);

/**
  * @function getComputedProperty
  * @desc Resolve method creator for computer properties
  * @param {String} property - CSS property
  * @param {Number} value - CSS length value
  * @param {String} [unit=UNIT] - CSS length unit
  * @returns {Object} Returns the result of `createComputedPropertyGetter`
*/
export const getComputedProperty = (property, value, unit = UNIT) =>
  createComputedPropertyGetter(property, value, unit);

/**
  * @function getStaticProperty
  * @desc Resolve method creator for static properties
  * @param {String} property - CSS property
  * @param {String} value - CSS value
  * @returns {Object} Returns the result of `createStaticPropertyGetter`
*/
export const getStaticProperty = (property, value) =>
  createStaticPropertyGetter(property, value);

/**
  * @function getActualProperty
  * @desc Resolve method creator for actual properties
  * @param {String} property - CSS property
  * @param {String} value - CSS value
  * @returns {Object} Returns the result of `createActualPropertyGetter`
*/
export const getActualProperty = (property, value) =>
  createActualPropertyGetter(property, value);
