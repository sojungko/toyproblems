const reverseLinkedList = (linkedList) => {

  let stack = [];
  let node = linkedList;
  while (node) {
    stack.push(node);
    node = node.next;
  }

  let result = stack.pop();
  node = result;

  while (stack.length) {
    let next = stack.pop();
    next.next = null;
    node.next = next;
    node = node.next;
  }
  return result;
}

class Node {
  constructor(value) {
    this.value = value || null;
    this.next = null;
  }
}