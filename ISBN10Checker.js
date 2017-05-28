
const validateISBN = (string) => {
  let sum = 0;
  let noHyphens = string.split('-').join('').split('');
  if (noHyphens[9] === 'X') {
    noHyphens[9] = 10;
  }
  noHyphens.forEach((num, i) => {
    sum += num * (10 - i);
  });
  return noHyphens.length === 10 && sum % 11 === 0;
}

// function validateISBN(string) {
//   var noHyphens = string.split('-').join('').split('');
//   if (noHyphens[9] === 'X') {
//     noHyphens[9] = 10;
//   }
//   var sum = 0;
//   var multipliers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
//   for (var i = 0; i < noHyphens.length; i++) {
//     sum += noHyphens[i] * multipliers[i]
//   }
//   if (sum % 11 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
