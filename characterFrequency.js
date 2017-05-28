const characterFrequency = (str) => {
  let repo = {};
  [...str].forEach(letter => repo[letter] = !repo[letter] ? 1 : ++repo[letter]);
  let result = Object.keys(repo);
  result = result.map(char => [char, repo[char]]);
  return result.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}