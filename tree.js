const treeMaker = (value) => {
  let instance = Object.create(treeMaker.methods);
  instance.value = value;
  instance.children = [];
  return instance;
}

treeMaker.methods = {
  addChild: function (value) {
    let node = treeMaker(value);
    this.children.push(node);
  },

  contains: function (value) {
    if (this.value === value) {
      return true;
    }
    for (let i = 0; i < this.children.length; i++) {
      let child = this.children[i];
      if (child.contains(value)) {
        return true;
      }
    }
    return false;
  }
}