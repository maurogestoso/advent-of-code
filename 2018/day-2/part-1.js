const { flow, values, reduce } = require("lodash/fp");
const { parseInput, mapToCharCounts, count2sAnd3s } = require("./helpers");

const parsedInput = parseInput();

const main = flow(
  mapToCharCounts,
  count2sAnd3s,
  values,
  reduce((total, num) => total * num, 1)
);

console.log(main(parsedInput));
