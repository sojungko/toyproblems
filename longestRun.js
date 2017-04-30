const longestRun = (str) => {
  let start = 0, end = 0, max = -1, result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      end++;
    } else if (str[i] !== str[i + 1] || str[i + 1] === undefined) {
      if (end - start > max) {
        result = [start, end];
        max = end - start;
      }
      start = i + 1;
      end++;
    }
  }
  return str.length === 0 ? [0, 0] : result
}