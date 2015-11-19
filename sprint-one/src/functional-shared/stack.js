var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  //var storage = {};
  someInstance.stackSize = 0;

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

stackMethods.size = function(){
	return this.stackSize < 0 ? 0 : this.stackSize;
};

stackMethods.pop = function(){
   var result = this.storage[this.stackSize-1];
   delete this.storage[this.stackSize-1];
   this.stackSize--
   return result;
};

stackMethods.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize++;  
}
