const _ = require("lodash/fp");
const { parseInput, fillRectOnBoard, doesRectOverlap } = require("./helpers");

const inputRectangles = parseInput();

const main = _.flow(
  _.reduce(fillRectOnBoard, {}),
  board => {
    return inputRectangles.filter(rect => !doesRectOverlap(board, rect));
  },
  _.prop(0),
  _.prop("id")
);

console.log(main(inputRectangles));
