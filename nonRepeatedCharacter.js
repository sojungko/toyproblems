const firstNonRepeatedCharacter = (str) => {
  let characters = {};
  let first;
  [...str].forEach(letter => characters[letter] = !characters[letter] ? 1 : ++characters[letter]);
  for (let i = 0; i < str.length; i++) {
    if (characters[letter] === 1) return letter;
  }
  return 'sorry';
}