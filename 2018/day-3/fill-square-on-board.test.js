const { fillSquareOnBoard } = require("./index");

test("fills a single square on an empty board", () => {
  const testSquare = { left: 1, top: 1, width: 2, height: 2 };
  const expectedBoard = {
    "1,1": 1,
    "1,2": 1,
    "2,1": 1,
    "2,2": 1
  };

  expect(fillSquareOnBoard({}, testSquare)).toEqual(expectedBoard);
});

test("fills multiple overlapping squares on an empty board", () => {
  const squares = [
    { left: 1, top: 1, width: 2, height: 2 },
    { left: 1, top: 1, width: 2, height: 2 },
    { left: 2, top: 2, width: 2, height: 2 }
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
  expect(squares.reduce(fillSquareOnBoard, {})).toEqual(expectedBoard);
});
