/*
In a room there are N ropes and N weights. Each rope is connected to exactly one weight (at just one end), and each rope has a particular durability − the maximum weight that it can suspend.
There is also a hook, attached to the ceiling. The ropes can be attached to the hook by tying the end without the weight.
The ropes can also be attached to other weights; that is, the ropes and weights can be attached to one another in a chain.
A rope will break if the sum of weights connected to it, directly or indirectly, is greater than its durability.

We know the order in which we want to attach N ropes. More precisely, we know the parameters of the rope (durability and weight) and the position of each attachment.
Durabilities, weights and positions are given in three zero-indexed arrays A, B, C of lengths N.
For each I (0 ≤ I < N): A[I] is the durability of the I-th rope, B[I] is the weight connected to the I-th rope, C[I] (such that C[I] < I) is the position to which we attach the I-th rope;
if C[I] equals −1 we attach to the hook, otherwise we attach to the weight connected to the C[I]-th rope.
The goal is to find the maximum number of ropes that can be attached in the specified order without breaking any of the ropes.

Write a function: def solution(A, B, C) that, given three zero-indexed arrays A, B, C of N integers, returns the maximum number of ropes that can be attached in a given order.
For example, Given the following arrays:

A= [4,3,1]
B = [2,2,1]
C = [-1,0,1]
the function should return 2, as if we attach a third rope then one rope will break, because the sum of weights is greater than its durability (2 + 2 + 1 = 5 and 5 > 4).
*/


class Rope {
  constructor(dur, weight, index) {
    this.dur = dur;
    this.weight = weight;
    this.index = index;
    this.children = {};
  }
  
  calcWeight() {
    let sum = 0;
    const recurse = (node) => {
      if (Object.keys(node.children).length === 0) {
        return;
      }
      for (let prop in node.children) {
        sum += node.children[prop].weight;
      }
    }

  }
  
  addChild(child, index) {
    /* only add child if doesn't break rope */
    if (this.dur > this.calcWeight() + child.weight) {
      this.children[child.index] = child;
    } else {
      return 'Rope breaks!';
    }
  }
}

findTreeIndex(index) {

}

const ropeBreaksAt = (arr1, arr2, arr3) => {
  // input control

  //
  let ropes = {};
  let length = arr1.length;
  for (let i = 0; i < length; i++) {
    ropes[] new Rope(arr1[i], arr2[i])
  }
}