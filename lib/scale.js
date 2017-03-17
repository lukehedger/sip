/**
  * @constant SCALE
  * @type {Array}
  * @desc Modular CSS Scale
  * @see http://jxnblk.com/modular/
  * @example [ 0, 8, 9 ... ]
*/
export const SCALE = [
  0,
  8,
  9,
  12,
  16,
  18,
  24,
  32,
  36,
  48,
  64,
  72,
  96,
  128,
  144,
  256,
];

/**
  * @constant UNIT
  * @type {String}
  * @desc Default CSS length unit
  * @see https://developer.mozilla.org/en/docs/Web/CSS/length
  * @example 'px'
  * @default
*/
export const UNIT = 'px';

/**
  * @function createScaledValueGetter
  * @desc Get a point on the scale in a given CSS length unit
  * @param {Array} scale - modular scale
  * @param {Number} scaleIndex - index on scale
  * @param {String} unit - CSS length unit
  * @returns {Number} Returns the corresponding value from `scale` at `scaleIndex` with `unit` appended
*/
const createScaledValueGetter = (scale, scaleIndex, unit) =>
  typeof scaleIndex === 'number' && typeof scale[scaleIndex] === 'number'
    ? `${scale[scaleIndex]}${unit}`
    : null;

/**
  * @function getScaledValue
  * @desc Decorator for `createScaledValueGetter` that sets the default `scale` and `unit` to use
  * @param {Number} scaleIndex - index on scale
  * @param {String} [unit=UNIT] - CSS length unit
  * @returns {Number} Returns the result of `createScaledValueGetter`
*/
export const getScaledValue = (scaleIndex, unit = UNIT) =>
  createScaledValueGetter(SCALE, scaleIndex, unit);
