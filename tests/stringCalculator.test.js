const add = require('../src/stringCalculator');

/**
 * test for empty input 
 */
test('returns 0 for empty input', () => {
  expect(add("")).toBe(0);
});

/**
 * test for single input "1"
 */
test('return number for single input', ()=> {
    expect(add("1")).toBe(1);
});