import getters from './getters';
import media from './media';

const Sip = sip => {
  if (typeof sip !== 'object') return;

  let sips = {};

  for (var prop in sip) {
    if (sip.hasOwnProperty(prop)) {
      let css;

      if (prop.indexOf('@') > -1) {
        const mediaQueryProp = prop.substring(0, prop.indexOf('@'));
        const breakpoint = prop.substring(prop.indexOf('@') + 1);

        css = getters[mediaQueryProp] &&
          media(breakpoint, getters[mediaQueryProp](sip[prop]));
      } else {
        css = getters[prop] && getters[prop](sip[prop]);
      }

      if (css) {
        sips = Object.assign({}, sips, css);
      }
    }
  }

  return sips;
};

export default Sip;
