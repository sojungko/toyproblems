const telephoneWords = (digits) => {
  const numberToLetters = {
    '0': ['0'],
    '1': ['1'],
    '2': ['A', 'B', 'C'],
    '3': ['D', 'E', 'F'],
    '4': ['G', 'H', 'I'],
    '5': ['J', 'K', 'L'],
    '6': ['M', 'N', 'O'],
    '7': ['P', 'Q', 'R', 'S'],
    '8': ['T', 'U', 'V'],
    '9': ['W', 'X', 'Y', 'Z']
  }

  let outcome = [];

  (function (word, index){
    if (word.length === digits.length) {
      outcome.push(word);
      return;
    }

    if (index === digits.length) {
      return;
    }
    let avail = numberToLetters[digits[index]];
    avail.forEach(option => {
      recurse(word + option, index + 1)
    });
  })('', 0)
  
  return outcome;
}