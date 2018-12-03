const _ = require("lodash/fp");
const { fillRectOnBoard, parseInput } = require("./helpers");

const inputLines = parseInput();

const main = _.flow(
  _.reduce(fillRectOnBoard, {}),
  _.values,
  _.filter(val => val >= 2)
);

console.log(main(inputLines).length);
