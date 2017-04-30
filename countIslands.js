const countIslands = (mapStr) => {
  let count = 0;
  let mapArr = mapStr.split('\n')
  if (mapArr.length > 0) {
    mapArr = mapArr.map(row => row.split(''));
  }
  const isWithinBounds = (row, col) => row >= 0 && row < mapArr.length && col >= 0 && col < mapArr.length;
  const isEndOfIsland = (row, col) => mapArr[row] === undefined || mapArr[row][col] === undefined || mapArr[row][col] === '.';
  const recurse = (row, col, counter) => {
    if (!isWithinBounds(row, col)) {
      return 0;
    }
    if (mapArr[row][col] === '.') {
      return 0;
    }
    if (mapArr[row][col] === '0') {
      // sink the island
      mapArr[row][col] = '.';
      // check if it's the end of an island
      console.log(`island sunk : `, mapArr[row][col]);
      if (isEndOfIsland(row - 1, col) && isEndOfIsland(row + 1, col) && isEndOfIsland(row, col - 1) && isEndOfIsland(row, col + 1)) {
        console.log('count about to be incremented')
        counter++;
        return counter;
      }
      return recurse(row - 1, col, counter);
      return recurse(row + 1, col, counter);
      return recurse(row, col - 1, counter);
      return recurse(row, col + 1, counter);
    }
  }

  for (let i = 0; i < mapArr.length; i++) {
    for (let j = 0; j < mapArr[i].length; j++) {
      let counter = 0;
      count += recurse(i, j, counter)
      console.log(`At ${mapArr[i][j]}, count is ${count}`)
    }
  }
  return count;

}

// console.log(countIslands('0'));
console.log(countIslands('0....0\n......\n..00..\n......\n0....0'));




// let countIslands = (mapStr) => {
//   let mapArr = mapStr.split('\n');
//   console.log('mapArr : ', mapArr);
//   let count = 0;

//   const isWithinBounds = (row, col) => row >= 0 && row < mapArr.length && col >= 0 && col < mapArr.length;
//   // surrounded by either undefined or .
//   const isEndOfIsland = (row, col) => mapArr[row] === undefined || mapArr[row][col] === undefined || mapArr[row][col] === '.';

//   const recurse = (row, col, counter) => {
//     if (!isWithinBounds(row, col)) {
//       return 0;
//     }
//     if (mapArr[row][col] === '.') {
//       return 0;
//     }
//     if (mapArr[row][col] === '0') {
//       // sink the island
//       if (col === 0) {
//         mapArr[row] = '.' + mapArr[row].substr(col + 1);
//       } else if (col === mapArr[row].length - 1) {
//         mapArr[row] = mapArr[row].substr(0, col) + '.';
//       } else {
//         mapArr[row] = mapArr[row].substr(0, col) + '.' + mapArr[row].substr(col + 1);
//         counter++;
//       }      
//       // console.log(mapArr);
//       // check if it's the end of island
//       if (isEndOfIsland(row - 1, col) && isEndOfIsland(row + 1, col) && isEndOfIsland(row, col - 1) && isEndOfIsland(row, col + 1)) {
//         // console.log('here', mapArr[row][col]);
//         counter++;
//         return counter;
//       }
//       // check up down left right
//       if (isWithinBounds(row - 1, col)) {
//         return recurse(row - 1, col, counter);
//       }
//       if (isWithinBounds(row + 1, col)) {
//         return recurse(row + 1, col, counter);
//       }
//       if (isWithinBounds(row, col - 1)) {
//         return recurse(row, col - 1, counter);
//       }
//       if (isWithinBounds(row, col + 1)) {
//         return recurse(row, col + 1, counter);
//       }
//     }
//   }

//   for (let i = 0; i < mapArr.length; i++) {
//     for (let j = 0; j < mapArr[i].length; j++) {
//       // console.log(mapArr[i][j], recurse(i, j));
//       let counter = 0;
//       count += recurse(i, j, counter);
//     }
//   }
//   return count;
// }

// console.log(countIslands('0'));
// console.log(countIslands('0....0\n......\n..00..\n......\n0....0'));

