// const rockPaperPermutation = (rounds) => {
//   let options = ['r', 'p', 's'];
//   let result = [];

//   if (rounds === 0) {
//     return [];
//   }
//   if (rounds === 1) {
//     return options;
//   }

//   const recurse = (round, perm) => {
//     if (round === rounds) {
//       result[perm] = true;
//       return;
//     }
//     options.forEach(option => recurse(round + 1, perm + option))
//   }

//   for (let i = 0; i < options.length; i++) {
//     recurse(1, options[i]);
//   }

//   return Object.keys(result);
// }


const rockPaperPermutation = (rounds) => {
  let options = [];
  (function recurse(roundsLeft, perm) {
    roundsLeft === 0 ? options.push(perm) :
    ['r', 'p', 's'].forEach(play => recurse(roundsLeft - 1, perm + play));
  })(rounds, '');
  return rounds === 0 ? [] : options;
}