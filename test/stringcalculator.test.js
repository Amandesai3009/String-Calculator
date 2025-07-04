const { add } = require('../src/stringcalculator');

test('empty string returns 0', () => {
  expect(add('')).toBe(0);
});

test('returns number itself for single number string', () => {
  expect(add("1")).toBe(1);
});