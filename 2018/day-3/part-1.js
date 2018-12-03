const path = require("path");
const fs = require("fs");
const _ = require("lodash/fp");
const { fillSquareOnBoard } = require("./index");

const inputLines = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .trim()
  .split("\n")
  .map(line => {
    const lineRegexp = /\#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/;
    const [id, left, top, width, height] = line
      .match(lineRegexp)
      .slice(1, 6)
      .map(str => Number(str));
    return { id, left, top, width, height };
  });

const main = _.flow(
  _.reduce(fillSquareOnBoard, {}),
  _.values,
  _.filter(val => val >= 2)
);

console.log(main(inputLines).length);
