const flow = require("lodash/fp/flow");
const { parseInput, getCommonChars, getCloseWords } = require("./helpers");

// #region input
const parsedInput = parseInput();

const main = flow(
  getCloseWords,
  getCommonChars
);

console.log(main(parsedInput));
