const { sumArray, calculateFirstRepeatedFrequency } = require("./index");

test("sumArray", () => {
  expect(sumArray([1, 1, 1])).toBe(3);
  expect(sumArray([1, -1, -1])).toBe(-1);
  expect(sumArray([-1, -2, -3])).toBe(-6);
});

test("calculateFirstRepeatedFrequency", () => {
  // expect(calculateFirstRepeatedFrequency([1, -1])).toBe(0);
  expect(calculateFirstRepeatedFrequency([-6, 3, 8, 5, -6])).toBe(5);
  expect(calculateFirstRepeatedFrequency([7, 7, -2, -7, -4])).toBe(14);
});
