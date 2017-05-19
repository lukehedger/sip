import bp from './breakpoints';

/**
 * @func media
 * @desc Media Query CSS factory function
 * @param {String} breakpoint - Breakpoint to apply
 * @param {Object} css - Styles to apply
 * @return {Object} Media Query object
 */
const media = (breakpoint, css) =>
  bp[breakpoint] && { [`@media (${bp[breakpoint]})`]: css };

export default media;
