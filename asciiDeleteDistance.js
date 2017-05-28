/*
asciiDeleteDistance
 
Given two strings, find the delete distance between the two. The delete distance is the value of the characters to be removed until the two strings are the same. 
 
For example, the distance between “at” and “cat” is 99. 
The distance between “bat” and “cat” is 197.
The distance between “trough” and “coughs” is 444.
*/
 
 
const asciiDeleteDistance = (str1, str2) => {

  let shorter = str1.length > str2.length ? str2 : str1;
  let longer = str1 === shorter ? str2 : str1;
  let distance = 0;

  let longestSubstr = '';

  for (let i = 0; i < shorter.length; i++) {
    for (let j = i; j < shorter.length + 1; j++) {
      let substring = shorter.substr(i, j);
      if (longer.includes(substring) && substring.length > longestSubstr.length) {
        longestSubstr = substring;
      }
    }
  }
 
  /* Make object of letters in each of the three strings */
  let repo = {};
  [...longestSubstr].forEach(letter => repo[letter] = !repo[letter] ? 1 : ++repo[letter]);
 
  let shorterRepo = {};
  [...shorter].forEach(letter => shorterRepo[letter] = !shorterRepo[letter] ? 1: ++shorterRepo[letter]);
 
  let longerRepo = {};
  [...longer].forEach(letter => longerRepo[letter] = !longerRepo[letter] ? 1: ++longerRepo[letter]);
 
  /* Add distance */
  for (letter in shorterRepo) {
    if (shorterRepo[letter] > repo[letter]) {
      distance += letter.charCodeAt(0) * (shorterRepo[letter] - repo[letter])
    } else if (!repo[letter]) {
      distance += letter.charCodeAt(0) * shorterRepo[letter]
    }
  }
 
  for (letter in longerRepo) {
    if (longerRepo[letter] > repo[letter]) {
      distance += letter.charCodeAt(0) * (longerRepo[letter] - repo[letter]);
    } else if (!repo[letter]) {
      distance += letter.charCodeAt(0) * longerRepo[letter]
    }
  }
 
  return distance;
}
 
 
