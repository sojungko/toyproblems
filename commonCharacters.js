const commonCharacters = (str1, str2) => {
  let result = [];
  let set = new Set(str2);
  for (let i = 0; i < str1.length; i++) {
    if (set.has(str1[i]) && result.indexOf(str1[i]) < 0 && str1[i] !== ' ') {
      result.push(str1[i]);
    }
  }
  return result.join('');
}
