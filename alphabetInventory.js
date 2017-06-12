const alphaCount = (alphabet, text) => {
  let inventory = {};
  [...alphabet.toLowerCase()].forEach(char => inventory[char] = 0);
  [...text.toLowerCase()].forEach(char => {
    if (inventory.hasOwnProperty(char)) {
      inventory[char]++;
    }
  });
  let result = [...alphabet.toLowerCase()]
    .filter(char => inventory[char] > 0)
    .map(char => char + ':' + inventory[char]).join(',')
  return result.length ? result : 'no matches';
}