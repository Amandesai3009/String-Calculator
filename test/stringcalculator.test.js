const { add } = require('../src/stringcalculator');

test('empty string returns 0', () => {
  expect(add('')).toBe(0);
});

test('returns number itself for single number string', () => {
  expect(add("1")).toBe(1);
});

test('returns sum of two comma-separated numbers', () => {
  expect(add("1,2")).toBe(3);
});

test('returns sum of multiple comma-separated numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});

test('handles newline characters as delimiters', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('handle custom delimiterss likee ";"', () => {
  expect(add("//;\n1;2")).toBe(3);
});