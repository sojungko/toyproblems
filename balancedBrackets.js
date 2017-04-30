const isBalanced = (str) => {
  const processed = str.replace(/[^\{\}\[\]\(\)]/g, '').split('');
  let stack = [];
  for (let i = 0; i < processed.length; i++) {
    let curr = processed[i];
    if (isOpening(curr)) {
      stack.push(curr);
    }
    if (isClosing(curr)) {
      let popped = stack.pop()
      if (matches(popped) !== curr) {
        return false;
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
}

const isOpening = (symbol) => symbol === '{' || symbol === '[' || symbol === '(';
const isClosing = (symbol) => symbol === '}' || symbol === ']' || symbol === ')';
const matches = (symbol) => {
  switch (symbol) {
    case '{': 
      return '}';
    case '[':
      return ']';
    case '(':
      return ')';  
  }
}