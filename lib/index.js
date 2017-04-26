import getters from './getters';

const Sip = sip => {
  if (typeof sip !== 'object') return;

  let sips = {};

  // TODO - parse {value, bp}
  // TODO - resolve value as usual (no need to change resolvers)
  // TODO - cache fact that MQ has been requested (HOW!?)
  // TODO - then get MQ styles `@media (...) { ...styles }` [media.js]
  // -> need something like styled.css`` (what does output of this look like?)

  for (var prop in sip) {
    if (sip.hasOwnProperty(prop) && getters[prop]) {
      sips = Object.assign({}, sips, getters[prop](sip[prop]));
    }
  }

  return sips;
};

export default Sip;
