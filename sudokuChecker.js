const sudokuCheck = (boardStr) => {
  let boardArr = boardStr.split('\n').map(row => [...row]);
  if (!checkRow(boardArr) || !checkRow(transposeMatrix(boardArr)) || !checkRow(transposeGrids(boardArr))) {
    return 'invalid';
  }
  return 'solved';
}

const checkRow = array => array.every(row => new Set(row).size === 9);

const transposeMatrix = (array) => {
  let copy = array.map(row => row.slice());
  let result = [];
  (function recurse(matrix) {
    if (matrix[0].length === 0) {
      return;
    }
    let bucket = [];
    for (let i = 0; i < matrix.length; i++) {
      let row = matrix[i];
      bucket.push(matrix[i].shift());
    }
    result.push(bucket);
    recurse(matrix);
  })(copy);

  return result;
}

const transposeGrids = (matrix) => {
  let copy = matrix.map(row => row.slice());
  let flattened = [];
  while (copy.length) {
    let bucket = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        bucket.push(copy[i].shift());
      }
    }
    flattened.push(bucket);
    copy = copy.filter(row => row.length)
  }
  return flattened;
}
