const add = require('../src/stringCalculator');

/**
 * test for empty input 
 */
test('returns 0 for empty input', () => {
  expect(add("")).toBe(0);
});