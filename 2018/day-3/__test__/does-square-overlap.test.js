const { doesRectOverlap } = require("../helpers");
const Rectangle = require("../rectangle");

test("returns true when the square overlaps", () => {
  const board = {
    "1,1": 1,
    "1,2": 1,
    "2,1": 1,
    "2,2": 2
  };
  const rect = new Rectangle({ left: 1, top: 1, width: 2, height: 2 });
  expect(doesRectOverlap(board, rect)).toBe(true);
});

test("returns false when the square does not overlap", () => {
  const board = {
    "1,1": 1,
    "1,2": 1,
    "2,1": 1,
    "2,2": 1
  };
  const rect = new Rectangle({ left: 1, top: 1, width: 2, height: 2 });
  expect(doesRectOverlap(board, rect)).toBe(false);
});
