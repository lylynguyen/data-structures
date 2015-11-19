var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.newVal = 1;
  someInstance.oldVal = 1;

  someInstance.storage = {}

  return someInstance;

};


var queueMethods = {};

queueMethods.enqueue = function(value) {

  this.storage[this.newVal] = value;
  this.newVal++;
}

queueMethods.size = function(){
	debugger;
	return (this.newVal-this.oldVal) < 0 ? 0 : (this.newVal-this.oldVal) ; 
}

queueMethods.dequeue = function(){
	var result = this.storage[this.oldVal];
	delete this.storage[this.oldVal];;
	this.oldVal++;
	return result;
}

