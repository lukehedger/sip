import {
  getScaledProperty,
  getComputedProperty,
  getStaticProperty,
  getActualProperty,
} from './resolvers';

/**
  * @constant getters
  * @type {Object}
  * @desc CSS attribute getters for shorthand properties
*/
const getters = {
  ai: value => getStaticProperty('ai', value),
  b: value => getScaledProperty('b', value),
  bg: value => getStaticProperty('bg', value),
  bs: value => getStaticProperty('bs', value),
  bw: value => getComputedProperty('bw', value),
  c: value => getStaticProperty('c', value),
  d: value => getStaticProperty('d', value),
  fd: value => getStaticProperty('fd', value),
  fs: value => getScaledProperty('fs', value),
  fw: value => getStaticProperty('fw', value),
  h: value => getScaledProperty('h', value),
  l: value => getScaledProperty('l', value),
  lh: value => getScaledProperty('lh', value),
  m: value => getScaledProperty('m', value),
  mt: value => getScaledProperty('mt', value),
  mr: value => getScaledProperty('mr', value),
  mb: value => getScaledProperty('mb', value),
  ml: value => getScaledProperty('ml', value),
  o: value => getStaticProperty('o', value),
  p: value => getScaledProperty('p', value),
  pt: value => getScaledProperty('pt', value),
  pr: value => getScaledProperty('pr', value),
  pb: value => getScaledProperty('pb', value),
  pl: value => getScaledProperty('pl', value),
  pe: value => getStaticProperty('pe', value),
  po: value => getStaticProperty('po', value),
  r: value => getScaledProperty('r', value),
  t: value => getScaledProperty('t', value),
  ta: value => getStaticProperty('ta', value),
  td: value => getStaticProperty('td', value),
  to: value => getStaticProperty('to', value),
  tt: value => getStaticProperty('tt', value),
  va: value => getStaticProperty('va', value),
  w: value => getScaledProperty('w', value),
  ws: value => getStaticProperty('ws', value),
  z: value => getActualProperty('z', value),
};

export default getters;
