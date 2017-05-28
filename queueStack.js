class Stack {
  constructor() {
    this.storage = [];
  }

  push(value) {
    this.storage.push(value);
  }

  pop() {
    return this.storage.pop();
  }

  size() {
    return this.storage.length;
  }
}

class Queue {
  constructor() {
    this.inbox = new Stack();
    this.outbox = new Stack();
  }

  enqueue(value) {
    this.inbox.push(value);
  }

  dequeue(value) {
    while (this.inbox.size() > 0) {
      this.outbox.push(this.inbox.pop());
    }
    let toReturn = this.outbox.pop();
    while (this.outbox.size() > 0) {
      this.inbox.push(this.outbox.pop());
    }
    return toReturn;
  }

  size() {
    return this.inbox.size();
  }
}