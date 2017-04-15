spiralTraversal = (matrix) => {
  let results = [];
  const recurse = (array) => {
    if (array.length === 0) {
      return;
    }
    console.log('[...results, ...array.shift()] : ', [...results, ...array.shift()]);
    results = [...results, ...array.shift()];
    console.log('results #1 : ', results);
    array.forEach((element) => {
      results.push(element.pop())
    });
    console.log('results #2 : ', results);
    console.log('[...results, ...array.pop().reverse()] : ', [...results, ...array.pop().reverse()]);
    results = [...results, ...array.pop().reverse()];
    console.log('results #3 : ', results);
    for (let i = array.length - 1; i >= 0; i--) {
      results.push(array[i].shift());
    }
    console.log('results #4 : ', results);
  }
  recurse(matrix);
  return results;
}
