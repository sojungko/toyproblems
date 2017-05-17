// const powerSet = (str) => {
//   let result = { "": true };
//   for (let i = 0; i < str.length; i++) {
//     result[str[i]] = true;
//   }
//   for (prop in result) {
//     for (let j = 0; j < str.length; j++) {
//       let newProp = prop + str[j];
//       if (!result.hasOwnProperty(newProp)) {
//         result[newProp] = true;
//       }
//     }
//   }
//   return Object.keys(result).sort();
// }

const powerSet = (str) => {
  let strArr = [...str];
  let result = { "": true };
  
  const recurse = (string, index) => {
    result[string] = true;
    recurse(string + str[index], index);
  }

  for (let i = 0; i < strArr.length; i++) {
    recurse("", i);
  }


}