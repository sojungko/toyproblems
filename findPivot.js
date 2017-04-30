const findPivot = (array, start, end) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return i + 1;
    }
  }
  return null;
}