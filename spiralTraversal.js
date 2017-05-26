const spiralTraversal = (matrix) => {
  let results = [];
  const recurse = (array) => {
    if (array.length === 0 || array[0].length === 0) {
      return;
    }
    results = [...results, ...array.shift()];
    array.forEach((element) => {
      results.push(element.pop())
    });
    results = array.length ? [...results, ...array.pop().reverse()] : results;
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i].length) {
        results.push(array[i].shift());
      }
    }
    recurse(array);
  }
  recurse(matrix);
  return results;
}
