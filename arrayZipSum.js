const zipSum = (xs, ys) => {
  const shorter = xs.length < ys.length ? xs : ys;
  const longer = xs.length >= ys.length ? xs : ys;
  return shorter.reduce((acc, curr, i) => [...acc, curr + longer[i]], []);
}