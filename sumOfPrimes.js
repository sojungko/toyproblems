const sumOfPrimes = n => {
  let sum = 0;
  let counter = 0;

  while (counter <= n) {
    /* check if counter is prime if so, add to sum */
    if (primeTester(counter)) {
      sum += counter;
    }
    counter++;
  }
  return sum;
}

const primeTester = n => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}