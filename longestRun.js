const longestRun = (str) => {
  let start = 0, end = 0, max = 0, result = [];
  const recurse = i => {
    if (i === str.length) {
      return;
    }
    if (str[i] === str[i + 1]) {
      end++;
      recurse(i++);
    }
    if (str[i] !== str[i + 1]) {
      if (end - start > max) {
        result = [start, end];
      }
      start++;
      recurse(i++);
    }
  }
  recurse(0);
  return result;
}
