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

/**
 * test for two inputs
 */
test('return sum of two numbers', ()=> {
    expect(add("1,2")).toBe(3);
});

/**
 * test for multiple inputs
 */
test('return sum of multiple numbers', ()=> {
    expect(add("1,2,3,4")).toBe(10);
});