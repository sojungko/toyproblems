class LinkedList {
  constructor(value) {
    this.head = { value };
    this.tail = this.head;
  }

  addToTail(value) {
    let node = new Node(value);
    if (this.head.value === undefined) {
      this.head = node;
      this.tail = this.head;
    } else if (this.head === this.tail) {
      this.tail = node;
      this.head.next = this.tail;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  }

  removeHead() {
    if (this.head === this.tail) {
      delete this.head;
      delete this.tail;
    } else {
      this.head = this.head.next;
    }
  }

  contains(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}