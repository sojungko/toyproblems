const charSum = str => {
  let numbers = str.match(/[123456789]/g);
  return numbers.reduce((acc, curr) => acc + +curr, 0)
}