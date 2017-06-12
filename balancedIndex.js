const balancedIndex = nums => {
  let sum = nums.reduce((acc, curr) => acc + curr, 0);
  let firstHalfSum = 0;
  let answer = -1;
  for (let i = 0; i < nums.length; i++) {
    if ((sum - nums[i]) / 2 === firstHalfSum) {
      answer = i;
      break;
    }
    firstHalfSum += nums[i];
  }
  return answer;
}