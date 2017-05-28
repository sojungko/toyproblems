const allAnagrams = (str) => {
  let result = [];
  const recurse = (avail, string) => {
    if (string.length === str.length) {
      result.push(string);
      return;
    }
    [...avail].forEach(letter => recurse(avail.replace(letter, ''), string + letter))
  }
  recurse(str, '')
  result = Array.from(new Set(result));
  return result;
}
