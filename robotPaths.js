const robotPaths = (n) => {
  let count = 0;
  let board = makeBoard(n);
/* 
  Constraints:
  1. Can only start from top left corner
  2. Must end at bottom right corner
  3. Need a mechanism for untoggling piece if no more route is possible/hit deadend
    --> that's the base case for recursion. must increment count before exiting.
*/
  const canGoUp = (row) => board[row - 1] !== undefined;
  const canGoDown = (row) => board[row + 1] !== undefined;
  const canGoLeft = (row, col) => board[row][col - 1] !== undefined;
  const canGoRight = (row, col) => board[row][col + 1] !== undefined;

  const makeMove = (row, col) => {
    // check if this spot has been visited
    // console.log(`Checking row ${row} column ${col}`);
    if (board.hasBeenVisited(row, col)) {
      // console.log('Already visited! Going back...')
      return;
    }
    // if not toggle it
    // console.log(`About to toggle row ${row} column ${col}`)
    board.togglePiece(row, col);
    // console.log(`Toggled row ${row} column ${col}`)
    if (canGoUp(row)) {
      // console.log(`Going up to row ${row-1} column ${col}`)
      makeMove(row - 1, col);
    }
    if (canGoDown(row)) {
      // console.log(`Going down to row ${row+1} column ${col}`)
      makeMove(row + 1, col);
    }
    if (canGoLeft(row, col)) {
      // console.log(`Going left to row ${row} column ${col-1}`)
      makeMove(row, col - 1);
    }
    if (canGoRight(row, col)) {
      // console.log(`Going right to row ${row} column ${col+1}`)
      makeMove(row, col + 1);
    }

    // if at the bottom corner, increment count and return
    if (row === n - 1 && col === n - 1) {
      // console.log('Hit the bottom right corner! Incrementing count...')
      count++;
      // console.log(`Count is now ${count}`)
    }
    // need to eventually untoggle it
    // console.log(`Untoggling row ${row} column ${col}`)
    board.togglePiece(row, col);
    return;
  }

  makeMove(0, 0);
  return count;
}
