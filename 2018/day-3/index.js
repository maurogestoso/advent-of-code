exports.fillSquareOnBoard = (board, square) => {
  for (let i = square.left; i < square.left + square.width; i++) {
    for (let j = square.top; j < square.top + square.height; j++) {
      const key = `${i},${j}`;
      board[key] = board[key] ? board[key] + 1 : 1;
    }
  }
  return board;
};
