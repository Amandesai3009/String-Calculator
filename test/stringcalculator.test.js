const { add, getCalledCount } = require('../src/stringcalculator');

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

test('throws error for negative numbers', () => {
  expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
});


test('tracks how many times the func was calles', () => {
  const start = getCalledCount();
  add("1,2");
  add("3");
  expect(getCalledCount()).toBe(start + 2);
});

test('ignores numbers greater than 1000', () => {
  expect(add("2,1001")).toBe(2);
});


test('handles multiple custom delimiters', () => {
  expect(add("//[***]\n1***2***3")).toBe(6);
});
