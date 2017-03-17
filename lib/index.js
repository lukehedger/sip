import getters from './getters';

const Sip = sip => {
  if (typeof sip !== 'object') return;

  let sips = {};

  for (var prop in sip) {
    if (sip.hasOwnProperty(prop) && getters[prop]) {
      sips = Object.assign({}, sips, getters[prop](sip[prop]));
    }
  }

  return sips;
};

export default Sip;
