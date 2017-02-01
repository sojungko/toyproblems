const isArray = arg => Array.isArray(arg);
const isNestedEmptyArrays = arg => Array.isArray(arg) && arg.join("") === "";

const arrayception = array => {
  let depth = 0;
  let max = 0;
  const recurse = element => {
    if (isNestedEmptyArrays(element) || !isArray(element)) {
      return;
    }
    if (isArray(element)) {
      depth++;
      for (let i = 0; i < element.length; i++) {
        recurse(element[i]);
      }
      if (depth > max) {
        max = depth;
      }
      depth--;
    }
  }
  recurse(array);
  return max;
}
