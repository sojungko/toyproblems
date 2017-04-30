const waterBlocks = (blocks) => {
  return blocks.reduce((acc, curr, i, array) => {
    let leftMax = Math.max(...array.splice(0, i));
    let rightMax = Math.max(...array.splice(i));
    let secondHighest = Math.min(leftMax, rightMax);
    let toAdd = secondHighest - curr;
    toAdd > 0 ? acc + toAdd : acc;
    return acc;
  }, 0)
}

/*




*/