const fractionConverter = (number) => {
  if (Number.isInteger(number)) {
    return number.toString() + '/1';
  }
  const decimalPt = number.toString().split('').indexOf('.');
  const decimals = number.toString().substr(decimalPt + 1).length;
  const numerator = number * (10 ** decimals);
  const denominator = 10 ** decimals;
  const gcd = greatestCommonDivisor(numerator, denominator);
  return (numerator / gcd).toString() + '/' + (denominator / gcd).toString();
}

const greatestCommonDivisor = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return greatestCommonDivisor(num2, num1 % num2);
}