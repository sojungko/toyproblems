const bubbleSort = (array) => {
  let copy = array.slice();
  for (let i = 0; i < copy.length - 1; i++) {
    for (let j = i; j < copy.length; j++) {
      if (copy[i] > copy[j]) {
        let temp = copy[i];
        copy[i] = copy[j];
        copy[j] = temp;
      }
    }
  }
  return copy;
}
