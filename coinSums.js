const coinSums = (total) => {
  let count = 0;
  const recurse = (rem, index) => {
    if (index < 0) {
      return;
    }
    while (rem > 0) {
      recurse(rem, index - 1);
      rem -= coins[index];
    }
    if (rem === 0) {
      count++;
    }
  }
  recurse(total, coins.length - 1)
  return count;
}