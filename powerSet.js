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
  let strArr = str.split('');
  let result = { "": true };
  
  const outerRecurse = () => {
    for (let i = 0; i < strArr.length; i++) {
      let spliced = strArr.splice(i, 1);
      recurse(spliced, strArr[i]);
    }

  }

  const innerRecurse = (arr, string) => {
    result[string] = true;
    
  }
}