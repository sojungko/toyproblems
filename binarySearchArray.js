const binarySearch = (array, target) => {
  let min = 0, max = array.length - 1, result;

  const recurse = (min, max) => {
    let mid = Math.floor((max - min) / 2);
    let middle = array[mid];
    if (array[min] === target) {
      result = min;
      return;
    }
    if (array[max] === target) {
      result = max;
      return;
    }
    if (middle === target) {
      result = mid;
      return;
    }
    if (mid === 0 || mid > array.length - 1) {
      result = -1;
      return;
    }
    if (middle > target) {
      recurse(0, mid - 1);
    } else if (middle < target) {
      recurse(mid + 1, array.length - 1);
    }
  }
  recurse(min, max);
  return result;
}