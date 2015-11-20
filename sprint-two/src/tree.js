var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var child = Tree(value);
	this.children.push(child);

};

treeMethods.contains = function(target) {
	var result = false;
  var recurse = function(node){
    if(node.value === target){
      result = true;
    }
    else {
      for(var i = 0; i < node.children.length;i++){
        recurse(node.children[i]);
      }
    }
  } // closing recurse 
  recurse(this);
  return result;
} // closing contains



/*
 * Complexity: What is the time complexity of the above functions?
 */


