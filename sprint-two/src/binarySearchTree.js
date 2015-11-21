var BinarySearchTree = function(value) {
	var binaryTree = Object.create(binaryTreePrototype);
	binaryTree.value = value;
	
	binaryTree.right = null;
	binaryTree.left =  null;
	return binaryTree;

};


// create insert
var binaryTreePrototype ={};


binaryTreePrototype.insert = function(key){
	
  if(key < this.value){
  	if(this.left === null){
  		this.left = BinarySearchTree(key);
  	} else {
  		this.left. insert(key);
  	}
  }	
  if(key > this.value){
		if(this.right === null){
			this.right = BinarySearchTree(key);
		} else {
			this.right.insert(key);
		}
	}
}

// create contains
binaryTreePrototype.contains = function(key){
	if (this.value === null){
		return false;
	}

	if(key == this.value){
		return true;
	}

	if(key < this.value && this.left){
		return this.left.contains(key);
	}

	if(key > this.value  && this.right){
		return this.right.contains(key);
	}
	return false;
}


binaryTreePrototype.depthFirstLog = function(cb){
	
	cb(this.value);

 	if(this.left){
 		this.left.depthFirstLog(cb);
	}

 	if(this.right){
 		this.right.depthFirstLog(cb);
 	}
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
