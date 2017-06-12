const cheeseStickConsumption = num => {
  if (num < 5) {
    return num * 2;
  }
  let required = Math.floor(num / 5);
  return num * (required + 2);
}