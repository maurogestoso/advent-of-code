const { fillRectOnBoard } = require("../helpers");
const Rectangle = require("../rectangle");

test("fills a single rectangle on an empty board", () => {
  const rect = new Rectangle({ left: 1, top: 1, width: 2, height: 2 });
  const expectedBoard = {
    "1,1": 1,
    "1,2": 1,
    "2,1": 1,
    "2,2": 1
  };

  expect(fillRectOnBoard({}, rect)).toEqual(expectedBoard);
});

test("fills multiple overlapping rectangles on an empty board", () => {
  const rectangles = [
    new Rectangle({ left: 1, top: 1, width: 2, height: 2 }),
    new Rectangle({ left: 1, top: 1, width: 2, height: 2 }),
    new Rectangle({ left: 2, top: 2, width: 2, height: 2 })
  ];
  const expectedBoard = {
    "1,1": 2,
    "1,2": 2,
    "2,1": 2,
    "2,2": 3,
    "2,3": 1,
    "3,2": 1,
    "3,3": 1
  };
  expect(rectangles.reduce(fillRectOnBoard, {})).toEqual(expectedBoard);
});
