const test = require('tape');
const sip = require('../dist/sip');

test('Sip:AlignItems - Sip `align-items` output', t => {
  const actual = sip({ ai: 'e' });
  const expected = { [`align-items`]: 'flex-end' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ align-items: "flex-end" }` when given `{ ai:"e" }`'
  );

  t.end();
});

test('Sip:Bottom - Sip `bottom` output', t => {
  const actual = sip({ b: 4 });
  const expected = { bottom: '16px' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ bottom: "16px" }` when given `{ b:4 }`'
  );

  t.end();
});

test('Sip:Background - Sip `background` output', t => {
  const actual = sip({ bg: 't' });
  const expected = { background: 'transparent' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ background: "transparent" }` when given `{ bg:"t" }`'
  );

  t.end();
});

test('Sip:BorderWidth - Sip `border-width` output', t => {
  const actual = sip({ bw: 1 });
  const expected = { [`border-width`]: '1px' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ border-width: "1px" }` when given `{ bw:1 }`'
  );

  t.end();
});

test('Sip:BorderStyle - Sip `border-style` output', t => {
  const actual = sip({ bs: 'do' });
  const expected = { [`border-style`]: 'dotted' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ border-style: "dotted" }` when given `{ bs:"do" }`'
  );

  t.end();
});

test('Sip:Cursor - Sip `cursor` output', t => {
  const actual = sip({ c: 'p' });
  const expected = { cursor: 'pointer' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ cursor: "pointer" }` when given `{ c:"p" }`'
  );

  t.end();
});

test('Sip:Display - Sip `display` output', t => {
  const actual = sip({ d: 'f' });
  const expected = { display: 'flex' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ display: "flex" }` when given `{ d:"f" }`'
  );

  t.end();
});

test('Sip:FlexDirection - Sip `flex-direction` output', t => {
  const actual = sip({ fd: 'r' });
  const expected = { [`flex-direction`]: 'row' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ flex-direction: "row" }` when given `{ fd:"r" }`'
  );

  t.end();
});

test('Sip:FontSize - Sip `font-size` output', t => {
  const actual = sip({ fs: 3 });
  const expected = { [`font-size`]: '12px' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ font-size: "12px" }` when given `{ fs:3 }`'
  );

  t.end();
});

test('Sip:FontWeight - Sip `font-weight` output', t => {
  const actual = sip({ fw: 'n' });
  const expected = { [`font-weight`]: '400' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ font-weight: "400" }` when given `{ fw:"n" }`'
  );

  t.end();
});

test('Sip:Height - Sip `height` output', t => {
  const actual = sip({ h: 4 });
  const expected = { height: '16px' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ height: "16px" }` when given `{ h:4 }`'
  );

  t.end();
});

test('Sip:Left - Sip `left` output', t => {
  const actual = sip({ l: 4 });
  const expected = { left: '16px' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ left: "16px" }` when given `{ l:4 }`'
  );

  t.end();
});

test('Sip:LineHeight - Sip `line-height` output', t => {
  const actual = sip({ lh: 4 });
  const expected = { [`line-height`]: '16px' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ line-height: "16px" }` when given `{ lh:4 }`'
  );

  t.end();
});

test('Sip:Margin - Sip `margin` output', t => {
  const actual = sip({ m: 4 });
  const expected = { margin: '16px' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ margin: "16px" }` when given `{ m:4 }`'
  );

  t.end();
});

test('Sip:MarginTop - Sip `margin-top` output', t => {
  const actual = sip({ mt: 4 });
  const expected = { [`margin-top`]: '16px' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ margin-top: "16px" }` when given `{ mt:4 }`'
  );

  t.end();
});

test('Sip:MarginRight - Sip `margin-right` output', t => {
  const actual = sip({ mr: 4 });
  const expected = { [`margin-right`]: '16px' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ margin-right: "16px" }` when given `{ mr:4 }`'
  );

  t.end();
});

test('Sip:MarginBottom - Sip `margin-bottom` output', t => {
  const actual = sip({ mb: 4 });
  const expected = { [`margin-bottom`]: '16px' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ margin-bottom: "16px" }` when given `{ mb:4 }`'
  );

  t.end();
});

test('Sip:MarginLeft - Sip `margin-left` output', t => {
  const actual = sip({ ml: 4 });
  const expected = { [`margin-left`]: '16px' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ margin-left: "16px" }` when given `{ ml:4 }`'
  );

  t.end();
});

test('Sip:Overflow - Sip `overflow` output', t => {
  const actual = sip({ o: 'h' });
  const expected = { overflow: 'hidden' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ overflow: "hidden" }` when given `{ o:"h" }`'
  );

  t.end();
});

test('Sip:Padding - Sip `padding` output', t => {
  const actual = sip({ p: 1 });
  const expected = { padding: '8px' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ padding: "8px" }` when given `{ p:1 }`'
  );

  t.end();
});

test('Sip:PaddingTop - Sip `padding-top` output', t => {
  const actual = sip({ pt: 1 });
  const expected = { [`padding-top`]: '8px' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ padding-top: "8px" }` when given `{ pt:1 }`'
  );

  t.end();
});

test('Sip:PaddingRight - Sip `padding-right` output', t => {
  const actual = sip({ pr: 1 });
  const expected = { [`padding-right`]: '8px' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ padding-right: "8px" }` when given `{ pr:1 }`'
  );

  t.end();
});

test('Sip:PaddingBottom - Sip `padding-bottom` output', t => {
  const actual = sip({ pb: 1 });
  const expected = { [`padding-bottom`]: '8px' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ padding-bottom: "8px" }` when given `{ pb:1 }`'
  );

  t.end();
});

test('Sip:PaddingLeft - Sip `padding-left` output', t => {
  const actual = sip({ pl: 1 });
  const expected = { [`padding-left`]: '8px' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ padding-left: "8px" }` when given `{ pl:1 }`'
  );

  t.end();
});

test('Sip:PointerEvents - Sip `pointer-events` output', t => {
  const actual = sip({ pe: 'n' });
  const expected = { [`pointer-events`]: 'none' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ pointer-events: "none" }` when given `{ pe:"n" }`'
  );

  t.end();
});

test('Sip:Position - Sip `position` output', t => {
  const actual = sip({ po: 'r' });
  const expected = { position: 'relative' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ position: "relative" }` when given `{ po:"r" }`'
  );

  t.end();
});

test('Sip:Right - Sip `right` output', t => {
  const actual = sip({ r: 4 });
  const expected = { right: '16px' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ right: "16px" }` when given `{ r:4 }`'
  );

  t.end();
});

test('Sip:Top - Sip `top` output', t => {
  const actual = sip({ t: 4 });
  const expected = { top: '16px' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ top: "16px" }` when given `{ t:4 }`'
  );

  t.end();
});

test('Sip:TextAlign - Sip `text-align` output', t => {
  const actual = sip({ ta: 'c' });
  const expected = { [`text-align`]: 'center' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ text-align: "center" }` when given `{ ta:"c" }`'
  );

  t.end();
});

test('Sip:TextDecoration - Sip `text-decoration` output', t => {
  const actual = sip({ td: 'u' });
  const expected = { [`text-decoration`]: 'underline' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ text-decoration: "underline" }` when given `{ td:"u" }`'
  );

  t.end();
});

test('Sip:TextOverflow - Sip `text-overflow` output', t => {
  const actual = sip({ to: 'e' });
  const expected = { [`text-overflow`]: 'ellipsis' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ text-overflow: "ellipsis" }` when given `{ to:"e" }`'
  );

  t.end();
});

test('Sip:TextTransform - Sip `text-transform` output', t => {
  const actual = sip({ tt: 'u' });
  const expected = { [`text-transform`]: 'uppercase' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ text-transform: "uppercase" }` when given `{ tt:"u" }`'
  );

  t.end();
});

test('Sip:VerticalAlign - Sip `vertical-align` output', t => {
  const actual = sip({ va: 'm' });
  const expected = { [`vertical-align`]: 'middle' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ vertical-align: "middle" }` when given `{ va:"m" }`'
  );

  t.end();
});

test('Sip:Width - Sip `width` output', t => {
  const actual = sip({ w: 15 });
  const expected = { width: '256px' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ width: "256px" }` when given `{ w:15 }`'
  );

  t.end();
});

test('Sip:WhiteSpace - Sip `white-space` output', t => {
  const actual = sip({ ws: 'n' });
  const expected = { [`white-space`]: 'nowrap' };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ white-space: "nowrap" }` when given `{ ws:"n" }`'
  );

  t.end();
});

test('Sip:ZIndex - Sip `z-index` output', t => {
  const actual = sip({ z: 99 });
  const expected = { [`z-index`]: 99 };

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ z-index: 99 }` when given `{ z:99 }`'
  );

  t.end();
});
