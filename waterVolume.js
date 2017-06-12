const volume = (heights) => {
  return heights.reduce((acc, curr, i) => {
    let left = heights.slice(0, i + 1);
    let right = heights.slice(i + 1);
    let leftMax = Math.max(...left);
    let rightMax = Math.max(...right);
    let secondHighest = Math.min(leftMax, rightMax)
    return secondHighest > curr ? (acc + secondHighest - curr) : acc  
}, 0)

}