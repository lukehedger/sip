/**
  * @constant properties
  * @type {Object}
  * @desc Lexicon of shorthand CSS properties
  * @default
*/
export const properties = {
  ai: 'align-items',
  b: 'bottom',
  bg: 'background',
  bw: 'border-width',
  bs: 'border-style',
  c: 'cursor',
  d: 'display',
  fd: 'flex-direction',
  fs: 'font-size',
  fw: 'font-weight',
  h: 'height',
  l: 'left',
  lh: 'line-height',
  m: 'margin',
  mt: 'margin-top',
  mr: 'margin-right',
  mb: 'margin-bottom',
  ml: 'margin-left',
  o: 'overflow',
  p: 'padding',
  pb: 'padding-bottom',
  pe: 'pointer-events',
  pl: 'padding-left',
  po: 'position',
  pr: 'padding-right',
  pt: 'padding-top',
  r: 'right',
  t: 'top',
  ta: 'text-align',
  td: 'text-decoration',
  to: 'text-overflow',
  tt: 'text-transform',
  va: 'vertical-align',
  w: 'width',
  ws: 'white-space',
  z: 'z-index',
};

/**
  * @constant values
  * @type {Object}
  * @desc Map of shorthand static CSS values keyed by corresponding CSS property
  * @default
*/
export const values = {
  ai: {
    c: 'center',
    e: 'flex-end',
    s: 'flex-start',
  },
  bg: {
    t: 'transparent',
  },
  bs: {
    da: 'dashed',
    do: 'dotted',
    s: 'solid',
  },
  c: {
    a: 'auto',
    c: 'copy',
    d: 'default',
    p: 'pointer',
    w: 'wait',
  },
  d: {
    b: 'block',
    i: 'inline',
    ib: 'inline-block',
    n: 'none',
    f: 'flex',
    t: 'table',
    tc: 'table-cell',
    tr: 'table-row',
  },
  fd: {
    c: 'column',
    r: 'row',
  },
  fw: {
    n: 400,
    b: 700,
  },
  o: {
    a: 'auto',
    h: 'hidden',
    s: 'scroll',
    v: 'visible',
  },
  pe: {
    n: 'none',
    i: 'initial',
  },
  po: {
    s: 'static',
    r: 'relative',
    a: 'absolute',
    f: 'fixed',
  },
  ta: {
    c: 'center',
    l: 'left',
    r: 'right',
    j: 'justify',
  },
  td: {
    u: 'underline',
    o: 'overline',
    n: 'none',
  },
  to: {
    c: 'clip',
    e: 'ellipsis',
  },
  tt: {
    u: 'uppercase',
  },
  va: {
    l: 'baseline',
    tt: 'text-top',
    tb: 'text-bottom',
    m: 'middle',
    t: 'top',
    b: 'bottom',
  },
  ws: {
    n: 'nowrap',
    p: 'pre',
    pw: 'pre-wrap',
    pl: 'pre-line',
  },
};
