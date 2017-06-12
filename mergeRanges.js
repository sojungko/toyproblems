const mergeRanges = arr => {
  let sorted = arr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let output = [];

  for (let i = 1; i < sorted.length; i++) {
    let curr = sorted[i];
    let previous;
    let merged;
    if (output.length) {
      previous = output[output.length - 1];
    } else {
      previous = sorted[i - 1];
    }

    if (curr[0] >= previous[0] && curr[0] <= previous[1]) {
      merged = [previous[0], curr[1]];
      output.push(merged);
    }
  }

}

/*

*/