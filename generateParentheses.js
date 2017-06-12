const generateParentheses = n => {
  let desiredLength = n * 2;
  let opens = n;
  let closes = n;
  let perm = {};

  (function recurse(opensLeft, closesLeft, str) {
    if (opensLeft === 0 && closesLeft === 0) {
      return;
    }
    if (str.length === desiredLength) {
      perm[str] = true;
      return;
    }
    if (opensLeft < closesLeft) {
      recurse(opensLeft, closesLeft - 1, str + ')');
    }
    recurse(opensLeft - 1, closesLeft, str + '(');
  })(opens, closes, '');

  let result = Object.keys(perm);
  return result.filter(parens => isBalanced(parens));
}

const isBalanced = (str) => {
  let stack = [];
  let peek = stack[stack.length - 1];
  [...str].forEach(paren => {
    if (paren === '(') {
      stack.push(paren);
    } else if (paren === ')') {
      if (peek === '(') {
        stack.pop();
      }
    }
  })
  console.log(stack)
  return stack.length === 0
}

/*

If there's an opening paren, there has to be a closing paren that comes later
OpensLeft has to always be equal to or less than closesLeft
Get all permutations of it


Edge cases :

(())())

*/