const editDistance = (str1, str2) => {
  if (str2.length !== str1.length) {
    /* Find longest substring that exists in both */
    let str1Arr = str1.split('');
    let str2Arr = str2.split('');    
    let longestSubstr = '';
    let count = 0;

    for (let i = 0; i < str1.length - 1; i++) {
      for (let j = str1.length; j >= i; j--) {
        let substring = str1.substr(i, j);
        if (str2.includes(substring) && substring.length > longestSubstr.length) {
          longestSubstr = substring;
        }
      }
    }

    /* Clip out the substring from both */
    let substrStart1 = str1.indexOf(longestSubstr);
    let substrStart2 = str2.indexOf(longestSubstr);

    str1Arr.splice(substrStart1, longestSubstr.length);
    str2Arr.splice(substrStart2, longestSubstr.length);

    let str1Repo = {};
    let str2Repo = {};
    let common = {};

    str1Arr.forEach(char => str1Repo[char] = !str1Repo[char] ? 1 : ++str1Repo[char]);
    str2Arr.forEach(char => str2Repo[char] = !str2Repo[char] ? 1 : ++str2Repo[char]);

    let longer = str1Arr.length > str2Arr.length ? str1Repo : str2Repo;
    let shorter = str1Arr.length > str2Arr.length ? str2Repo : str1Repo;

    for (let char in longer) {
      if (!shorter[char]) {
        count += longer[char];
      } else if (shorter[char] !== longer[char]) {
        count += Math.abs(shorter[char] - longer[char]);
      } else {
        common[char] = longer[char];
      }
    }

    console.log(count);
    console.log(common)

        

  }


}

editDistance('hackerrank', 'hackreactor')
editDistance('wednesday', 'sunday')

/*

Check str1 and str2 of equal length
 - If not, find the longest substring of str1 that's also in str2
 - Slice that substring off str1 and str2

'hackerrank' => 'errank'
'hackreactor' => 'reactor'

'e' -> 'r'
'r' -> 'e'
take out 'r'
'n' -> 'c'
'k' -> 't'
add 'o'
add 'r'


str1 inventory { 'e': 1, 'r': 2, 'a': 1, 'n': 1, 'k': 1}
str2 inventory { 'r': 2, 'e': 1, 'a': 1, 'c': 1, 't': 1, 'o': 1}


'wednesday' => 'wednes'
'sunday' => 'sun'

str1 inventory { 'w': 1, 'e': 1, 'd': 1, 'n': 1, 'e': 1, 's': 1 }
str2 inventory { 's': 1, 'u': 1, 'n': 1}


function editDistance (str1, str2) {
  let st1Len = str1.length;
  let st2Len = str2.length;

  const helper = (lenOne, lenTwo) => {
    if(lenOne === 0){
      return lenTwo
    }
    if(lenTwo === 0){
      return lenOne
    }
    if(str1[lenOne-1] === str2[lenTwo - 1]){
      return helper(lenOne - 1, lenTwo-1)
    } else {
      var insert = helper(lenOne, lenTwo - 1)
      var del = helper(lenOne - 1, lenTwo)
      var replace = helper(lenOne - 1, lenTwo-1)
      return 1 + Math.min(insert, del, replace)
    }

  }
  return helper(st1Len, st2Len)
}

*/