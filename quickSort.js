const quickSort = arr => {
  return (function recurse(array) {
    if (array.length <= 1) {
      return array;
    }
    let pivot = array[array.length - 1];
    let smaller = [];
    let larger = [];
    array.slice(0, array.length - 1).forEach(el => el > pivot ? larger.push(el) : smaller.push(el));
    return [...recurse(smaller), pivot, ...recurse(larger)]
  })(arr)
}