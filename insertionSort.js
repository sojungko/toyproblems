const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      let curr = array[i].value;
      let prev = array[j].value;
      if (curr < prev) {
        let toInsert = array.splice(i, 1);
        array.splice(j, 0, toInsert);
      }
    }
  }
  return array
}