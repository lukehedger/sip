const test = require('tape');
const sip = require('../dist/sip');

test('Sip:Example - Sip example test', t => {
  const actual = { margin: '16px' };
  const expected = sip({ m: 4 });

  t.deepEqual(
    actual,
    expected,
    'Sip should output `{ margin: "16px" }` when given `{ m:4 }`'
  );

  t.end();
});
