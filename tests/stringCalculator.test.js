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

/**
 * handles new line as delimiters
 */
test('return sum by handling new line as delimiters', ()=> {
    expect(add("1\n2,3")).toBe(6);
});

/**
 * handles other custom delimiters
 */
test('return sum by handling custom delimiters', ()=> {
    expect(add("//;\n1;2")).toBe(3);
});

/**
 * handles negative numbers
 */
test('throw exception in case of negative numbers', () => {
    expect(() => add("1,-2,3,-4")).toThrow("negative numbers -2, -4 are not allowed");
});

/**
 * handles invalid inputs
 */
test('throws excpetion on non-numeric or invlaid input', () => {
    expect(() => add("1,a,3")).toThrow("Invalid number: a");
});