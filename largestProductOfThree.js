const largestProductOfThree = (array) => {
  const sorted = array.sort((a, b) => a - b);
  const length = sorted.length;
  const lastThree = sorted[length - 1] * sorted[length - 2] * sorted[length - 3];
  const firstTwoAndLastOne = sorted[0] * sorted[1] * sorted[length - 1];
  return Math.max(lastThree, firstTwoAndLastOne);
}
