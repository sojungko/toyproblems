const bind = (func, context, ...arg) => (...innerArg) => func.apply(context, [...arg, ...innerArg]);

Function.prototype.bind = function (context, ...args) {
  return (...innerArgs) => this.apply(context, [...args, ...innerArgs]);
}
