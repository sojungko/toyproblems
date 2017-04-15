var Tree = function(){
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(one, two){
  const pathOne = this.getAncestorPath(one);
  const pathTwo = this.getAncestorPath(two);
  if (pathOne === null) {
    return this;
  }
  for (var i = 0; i < pathOne.length; i++) {
    if (pathOne[i] !== pathTwo[i]) {
      return pathOne[i - 1];
    }
  }
}

Tree.prototype.getAncestorPath = function(node){
  let path = [];
  const recurse = (tree) => {
    if (tree.isDescendant(node)) {
      path.push(tree);
      for (let i = 0; i < tree.children.length; i++) {
        recurse(tree.children[i]);
      }
    } else {
      return;
    }
  }
  recurse(this);
  if (path.length > 0) {
    path.push(node);
    return path;
  } else {
    return null;
  }
}

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
