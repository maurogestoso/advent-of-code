const path = require("path");
const fs = require("fs");
const Rectangle = require("./rectangle");

exports.parseInput = () =>
  fs
    .readFileSync(path.join(__dirname, "input.txt"), "utf8")
    .trim()
    .split("\n")
    .map(line => {
      const lineRegexp = /\#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/;
      const [id, left, top, width, height] = line
        .match(lineRegexp)
        .slice(1, 6)
        .map(str => Number(str));
      return new Rectangle({ id, left, top, width, height });
    });

exports.fillRectOnBoard = (board, rect) => {
  // This function is impure for performance reasons :(
  rect.forEach(key => {
    board[key] = board[key] ? board[key] + 1 : 1;
  });

  return board;
};

exports.doesRectOverlap = (board, rect) => {
  let doesItOverlap = false;
  rect.forEach(key => {
    if (board[key] > 1) doesItOverlap = true;
  });
  return doesItOverlap;
};
