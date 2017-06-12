const selectionSort = arr => {
  let index = 0;

  while (index < arr.length - 1) {
    let comparison = arr.slice(index + 1);
    let minIndex = comparison.reduce((acc, curr, i) => {
      if (comparison[acc] > curr) {
        acc = i;
      }
      return acc;
    }, 0)

    if (arr[index] > arr[index + minIndex + 1]) {
      let temp = arr[index];
      arr[index] = arr[index + minIndex + 1];
      arr[index + minIndex + 1] = temp;

    }
    index++;
  }
  return arr;
}