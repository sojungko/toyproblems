const robotPaths = (n) => {
  let board = makeBoard(n);
  let solutions = 0;
  (function recurse(row, col) {
    if (cannotProceed(board, row, col)) {
      return;
    }
    if (atBottomRightCorner(row, col, n)) {
      solutions++;
      return;
    }
    board.togglePiece(row, col);
    recurse(row - 1, col);
    recurse(row + 1, col);
    recurse(row, col - 1);
    recurse(row, col + 1);
    board.togglePiece(row, col);
  })(0, 0);
  return solutions;
}

const cannotProceed = (board, row, col) => board[row] === undefined || board[row][col] === undefined || board.hasBeenVisited(row, col);
const atBottomRightCorner = (row, col, n) => row === n - 1 && col === n - 1;


