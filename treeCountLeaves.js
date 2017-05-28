class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  countLeaves() {
    let count = 0;
    (function recurse(node) {
      if (node.children.length === 0) count++;
      node.children.forEach(child => recurse(child));
    })(this);
    return count;
  }

  addChild(child) {
    if (!child || !(child instanceof Tree)) {
      child = new Tree(child);
    }

    if (!this.isDescendant(child)) {
      this.children.push(child);
    } else {
      throw new Error("That child is already a child of this tree");
    }
    // return the new child node for convenience
    return child;
  }

  isDescendant(child) {
    if (this.children.indexOf(child) !== -1) {
      // `child` is an immediate child of this tree
      return true;
    } else {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].isDescendant(child)) {
          // `child` is descendant of this tree
          return true;
        }
      }
      return false;
    }
  }

  removeChild(child) {
    var index = this.children.indexOf(child);
    if (index !== -1) {
      // remove the child
      this.children.splice(index, 1);
    } else {
      throw new Error("That node is not an immediate child of this tree");
    }
  }
}