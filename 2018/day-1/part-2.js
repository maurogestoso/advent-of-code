const { parseInput, calculateFirstRepeatedFrequency } = require("./helpers");

const parsedInput = parseInput();

const main = calculateFirstRepeatedFrequency;

console.log(main(parsedInput));
