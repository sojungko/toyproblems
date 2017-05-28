// function longestPalindrome(string) {
//   let checkPalindrome = function (str) {
//     for (var i = 0; i < Math.floor(str.length / 2); i++) {
//       if (str[i] !== str[str.length - 1 - i]) {
//         return false;
//       }
//     }
//     return true;
//   }

//   let recurse = function (start, end) {
//     var curr = string.slice(start, end);
//     if (curr.length === 0) {
//       return;
//     }
//     if (checkPalindrome(curr)) {
//       return curr;
//     }
//     if (end < string.length) {
//       return recurse(start + 1, end + 1);
//     }
//   }

//   for (var i = 0; i < string.length; i++) {
//     if (recurse(0, string.length - i) !== undefined) {
//       return recurse(0, string.length - i);
//     }
//   }
// }


const longestPalindrome = (str) => {
  let longest = '';

  for (let i = 0; i < str.length; i++) {
    for (let j = 1; j < str.length + 1; j++) {
      let curr = str.substr(i, j);
      if (isPalindrome(curr) && curr.length > longest.length) {
        longest = curr;
      }
    }
  }
  return longest;
}

const isPalindrome = (str) => [...str].reverse().join('') === str;