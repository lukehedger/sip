const test = require('tape');
const sip = require('../dist/sip');

test('Sip:AlignItems - Sip `align-items` output', t => {
  const actual = { [`align-items`]: 'flex-end' };
  const expected = sip({ ai: 'e' });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ align-items: "flex-end" }` when given `{ ai:"e" }`'
  );

  t.end();
});

test('Sip:Bottom - Sip `bottom` output', t => {
  const actual = { bottom: '16px' };
  const expected = sip({ b: 4 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ bottom: "16px" }` when given `{ b:4 }`'
  );

  t.end();
});

test('Sip:Background - Sip `background` output', t => {
  const actual = { background: 'transparent' };
  const expected = sip({ bg: 't' });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ background: "transparent" }` when given `{ bg:"t" }`'
  );

  t.end();
});

test('Sip:BorderWidth - Sip `border-width` output', t => {
  const actual = { [`border-width`]: '1px' };
  const expected = sip({ bw: 1 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ border-width: "1px" }` when given `{ bw:1 }`'
  );

  t.end();
});

test('Sip:BorderStyle - Sip `border-style` output', t => {
  const actual = { [`border-style`]: 'dotted' };
  const expected = sip({ bs: 'do' });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ border-style: "dotted" }` when given `{ bs:"do" }`'
  );

  t.end();
});

test('Sip:Cursor - Sip `cursor` output', t => {
  const actual = { cursor: 'pointer' };
  const expected = sip({ c: 'p' });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ cursor: "pointer" }` when given `{ c:"p" }`'
  );

  t.end();
});

test('Sip:Display - Sip `display` output', t => {
  const actual = { display: 'flex' };
  const expected = sip({ d: 'f' });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ display: "flex" }` when given `{ d:"f" }`'
  );

  t.end();
});

test('Sip:FlexDirection - Sip `flex-direction` output', t => {
  const actual = { [`flex-direction`]: 'row' };
  const expected = sip({ fd: 'r' });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ flex-direction: "row" }` when given `{ fd:"r" }`'
  );

  t.end();
});

test('Sip:FontSize - Sip `font-size` output', t => {
  const actual = { [`font-size`]: '12px' };
  const expected = sip({ fs: 3 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ font-size: "12px" }` when given `{ fs:3 }`'
  );

  t.end();
});

test('Sip:FontWeight - Sip `font-weight` output', t => {
  const actual = { [`font-weight`]: '400' };
  const expected = sip({ fw: 'n' });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ font-weight: "400" }` when given `{ fw:"n" }`'
  );

  t.end();
});

test('Sip:Height - Sip `height` output', t => {
  const actual = { height: '16px' };
  const expected = sip({ h: 4 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ height: "16px" }` when given `{ h:4 }`'
  );

  t.end();
});

test('Sip:Left - Sip `left` output', t => {
  const actual = { left: '16px' };
  const expected = sip({ l: 4 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ left: "16px" }` when given `{ l:4 }`'
  );

  t.end();
});

test('Sip:LineHeight - Sip `line-height` output', t => {
  const actual = { [`line-height`]: '16px' };
  const expected = sip({ lh: 4 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ line-height: "16px" }` when given `{ lh:4 }`'
  );

  t.end();
});

test('Sip:Margin - Sip `margin` output', t => {
  const actual = { margin: '16px' };
  const expected = sip({ m: 4 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ margin: "16px" }` when given `{ m:4 }`'
  );

  t.end();
});

test('Sip:MarginTop - Sip `margin-top` output', t => {
  const actual = { [`margin-top`]: '16px' };
  const expected = sip({ mt: 4 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ margin-top: "16px" }` when given `{ mt:4 }`'
  );

  t.end();
});

test('Sip:MarginRight - Sip `margin-right` output', t => {
  const actual = { [`margin-right`]: '16px' };
  const expected = sip({ mr: 4 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ margin-right: "16px" }` when given `{ mr:4 }`'
  );

  t.end();
});

test('Sip:MarginBottom - Sip `margin-bottom` output', t => {
  const actual = { [`margin-bottom`]: '16px' };
  const expected = sip({ mb: 4 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ margin-bottom: "16px" }` when given `{ mb:4 }`'
  );

  t.end();
});

test('Sip:MarginLeft - Sip `margin-left` output', t => {
  const actual = { [`margin-left`]: '16px' };
  const expected = sip({ ml: 4 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ margin-left: "16px" }` when given `{ ml:4 }`'
  );

  t.end();
});

test('Sip:Overflow - Sip `overflow` output', t => {
  const actual = { overflow: 'hidden' };
  const expected = sip({ o: 'h' });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ overflow: "hidden" }` when given `{ o:"h" }`'
  );

  t.end();
});

test('Sip:Padding - Sip `padding` output', t => {
  const actual = { padding: '8px' };
  const expected = sip({ p: 1 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ padding: "8px" }` when given `{ p:1 }`'
  );

  t.end();
});

test('Sip:PaddingTop - Sip `padding-top` output', t => {
  const actual = { [`padding-top`]: '8px' };
  const expected = sip({ pt: 1 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ padding-top: "8px" }` when given `{ pt:1 }`'
  );

  t.end();
});

test('Sip:PaddingRight - Sip `padding-right` output', t => {
  const actual = { [`padding-right`]: '8px' };
  const expected = sip({ pr: 1 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ padding-right: "8px" }` when given `{ pr:1 }`'
  );

  t.end();
});

test('Sip:PaddingBottom - Sip `padding-bottom` output', t => {
  const actual = { [`padding-bottom`]: '8px' };
  const expected = sip({ pb: 1 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ padding-bottom: "8px" }` when given `{ pb:1 }`'
  );

  t.end();
});

test('Sip:PaddingLeft - Sip `padding-left` output', t => {
  const actual = { [`padding-left`]: '8px' };
  const expected = sip({ pl: 1 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ padding-left: "8px" }` when given `{ pl:1 }`'
  );

  t.end();
});

test('Sip:PointerEvents - Sip `pointer-events` output', t => {
  const actual = { [`pointer-events`]: 'none' };
  const expected = sip({ pe: 'n' });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ pointer-events: "none" }` when given `{ pe:"n" }`'
  );

  t.end();
});

test('Sip:Position - Sip `position` output', t => {
  const actual = { position: 'relative' };
  const expected = sip({ po: 'r' });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ position: "relative" }` when given `{ po:"r" }`'
  );

  t.end();
});

test('Sip:Right - Sip `right` output', t => {
  const actual = { right: '16px' };
  const expected = sip({ r: 4 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ right: "16px" }` when given `{ r:4 }`'
  );

  t.end();
});

test('Sip:Top - Sip `top` output', t => {
  const actual = { top: '16px' };
  const expected = sip({ t: 4 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ top: "16px" }` when given `{ t:4 }`'
  );

  t.end();
});

test('Sip:TextAlign - Sip `text-align` output', t => {
  const actual = { [`text-align`]: 'center' };
  const expected = sip({ ta: 'c' });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ text-align: "center" }` when given `{ ta:"c" }`'
  );

  t.end();
});

test('Sip:TextDecoration - Sip `text-decoration` output', t => {
  const actual = { [`text-decoration`]: 'underline' };
  const expected = sip({ td: 'u' });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ text-decoration: "underline" }` when given `{ td:"u" }`'
  );

  t.end();
});

test('Sip:TextOverflow - Sip `text-overflow` output', t => {
  const actual = { [`text-overflow`]: 'ellipsis' };
  const expected = sip({ to: 'e' });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ text-overflow: "ellipsis" }` when given `{ to:"e" }`'
  );

  t.end();
});

test('Sip:TextTransform - Sip `text-transform` output', t => {
  const actual = { [`text-transform`]: 'uppercase' };
  const expected = sip({ tt: 'u' });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ text-transform: "uppercase" }` when given `{ tt:"u" }`'
  );

  t.end();
});

test('Sip:VerticalAlign - Sip `vertical-align` output', t => {
  const actual = { [`vertical-align`]: 'middle' };
  const expected = sip({ va: 'm' });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ vertical-align: "middle" }` when given `{ va:"m" }`'
  );

  t.end();
});

test('Sip:Width - Sip `width` output', t => {
  const actual = { width: '256px' };
  const expected = sip({ w: 15 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ width: "256px" }` when given `{ w:15 }`'
  );

  t.end();
});

test('Sip:WhiteSpace - Sip `white-space` output', t => {
  const actual = { [`white-space`]: 'nowrap' };
  const expected = sip({ ws: 'n' });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ white-space: "nowrap" }` when given `{ ws:"n" }`'
  );

  t.end();
});

test('Sip:ZIndex - Sip `z-index` output', t => {
  const actual = { [`z-index`]: 99 };
  const expected = sip({ z: 99 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ z-index: 99 }` when given `{ z:99 }`'
  );

  t.end();
});
