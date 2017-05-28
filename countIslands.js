const countIslands = (mapStr) => {
  let array = mapStr.split('\n').map(str => str.split(''));
  let count = 0;

  const sinkIslands = (row, col) => {
    if (array[row] === undefined || array[row][col] === undefined) {
      return;
    }
    if (array[row][col] !== '0') {
      return;
    }
    if (array[row][col] === '0') {
      array[row][col] = '.';
    }
    sinkIslands(row - 1, col);
    sinkIslands(row + 1, col);
    sinkIslands(row, col - 1);
    sinkIslands(row, col + 1);
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === '0') {
        count++;
        sinkIslands(i, j);
      }
    }
  }
  return count;

}
