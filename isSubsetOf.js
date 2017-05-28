Array.prototype.isSubsetOf = function (input) {
  let set = new Set(input);
  return this.every(el => set.has(el));
}