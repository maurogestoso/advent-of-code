const path = require("path");

const { parseInput, sumArray, calculateFirstRepeatedFrequency } = require(".");

const parsedInput = parseInput(path.join(__dirname, "input.txt"));

const solution1 = sumArray(parsedInput);
console.log(`Solution Part 1: ${solution1}`);

const solution2 = calculateFirstRepeatedFrequency(parsedInput);
console.log(`Solution Part 2: ${solution2}`);
