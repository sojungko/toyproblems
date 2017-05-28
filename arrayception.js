const arrayception = array => {
  let deepest = 0;
  (function recurse(arr, depth) {
    if (isNestedEmptyArray(arr) || !isArray(arr)) return;
    arr.forEach(el => {
      depth++;
      deepest = Math.max(deepest, depth);
      recurse(el, depth);
      depth--;
    })
  })(array, 0);
  return deepest;
}

const isArray = (arg) => Array.isArray(arg);
const isNestedEmptyArray = (arg) => arg.toString().split(',').join('') === '';