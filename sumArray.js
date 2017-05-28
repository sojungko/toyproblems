const sumArray = (arr) => {
  let max = arr[0];
  arr.reduce((acc, curr) => {
    max = Math.max(max, acc += curr);
    return acc < 0 ? 0 : acc;
  }, 0);
  return max;
}