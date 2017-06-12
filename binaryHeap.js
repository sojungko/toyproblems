class BinaryHeap {
  constructor() {
    this._heap = [];
    this._compare = (i, j) => i < j;
  }

  getRoot() {
    return this._heap[0];
  }

  insert(value) {
    this._heap.push(value);
    let index = this._heap.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (parentIndex >= 0) {
      let childValue = this._heap[index];
      let parentValue = this._heap[parentIndex];
      if (childValue < parentValue) {
        this._heap[index] = parentValue;
        this._heap[parentIndex] = childValue;
      }
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  removeRoot() {
    let temp = this._heap[0];
    this._heap[0] = this._heap[this._heap.length - 1];
    this._heap[this._heap.length - 1] = temp;
    this._heap.pop();

    let parentIndex = 0;
    let parentValue = this._heap[0];
    let childIndex1 = 1;
    let childIndex2 = 2;
    let child1 = this._heap[1];
    let child2 = this._heap[2];

    while (child1 || child2 && Math.min(parentValue, child1, child2) !== parentValue) {
      if (child1 > child2) {
        this._heap[childIndex2] = parentValue;
        this._heap[parentIndex] = child2;
        parentIndex = childIndex2;
      } else {
        this._heap[childIndex1] = parentValue;
        this._heap[parentIndex] = child1;
        parentIndex = childIndex1;
      }
      parentValue = this._heap[parentIndex];
      childIndex1 = parentIndex * 2 + 1;
      childIndex2 = parentIndex * 2 + 2;
      child1 = this._heap[childIndex1];
      child2 = this._heap[childIndex2];
    }

    return temp;
  }

}