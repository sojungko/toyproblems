class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  map(cb) {
    let tree = new Tree(cb(this.value));
    this.children.forEach(child => tree.addChild(child.map(cb)))
    return tree;
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
    return child;
  }

  isDescendant(child) {
    if (this.children.indexOf(child) !== -1) {
      return true;
    } else {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].isDescendant(child)) {
          return true;
        }
      }
      return false;
    }
  }


  removeChild(child) {
    var index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
    } else {
      throw new Error("That node is not an immediate child of this tree");
    }
  }
}