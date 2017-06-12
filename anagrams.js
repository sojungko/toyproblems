const isAnagram = (a, b) => {
  let inventory = {};
  [...a].filter(char => char !== ' ')
    .forEach(char => inventory[char] = !inventory[char] ? 1 : ++inventory[char]);
  [...b].filter(char => char !== ' ')
    .forEach(char => inventory[char]--);

  for (key in inventory) {
    if (inventory[key] !== 0) {
      return false
    }
  }
  return true;
}