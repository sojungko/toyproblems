const binarySearch = (array, target) => {
  let copy = array.slice();
  let midPoint = Math.floor(array.length / 2);
  let answer = -1;
  const recurse = (arr) => {
    let middle = arr[midPoint];
    console.log(midPoint, middle);
    if (midPoint === 0) {
      return;
    }
    if (middle === target) {
      answer = midPoint;
      return;
    }
    if (middle > target) {
      recurse(arr.slice(0, midPoint));
    }
    if (middle < target) {
      recurse(arr.slice(midPoint + 1));
    }
  }
  recurse(copy);
  return answer;
}
