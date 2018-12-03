const { calculateFirstRepeatedFrequency } = require("../helpers");

test("calculateFirstRepeatedFrequency", () => {
  // expect(calculateFirstRepeatedFrequency([1, -1])).toBe(0);
  expect(calculateFirstRepeatedFrequency([-6, 3, 8, 5, -6])).toBe(5);
  expect(calculateFirstRepeatedFrequency([7, 7, -2, -7, -4])).toBe(14);
});
