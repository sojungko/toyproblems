function isSubset (array, sub) {
  let copy = array.slice();
  console.log(copy);
  for (let i = 0; i < sub.length; i++) {
    const index = copy.indexOf(sub[i]);
    console.log(index);
    if (index < 0) {
      return false;
    }
    copy.splice(index, 1);
    console.log(copy);
  }
  return true;
}
