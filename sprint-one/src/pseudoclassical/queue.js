var Queue = function() {


  this.newVal = 1;
  this.oldVal = 1;
  this.storage = {}

};



Queue.prototype.enqueue = function(value) {

  this.storage[this.newVal] = value;
  this.newVal++;
}

Queue.prototype.size = function(){
	return (this.newVal-this.oldVal) < 0 ? 0 : (this.newVal-this.oldVal) ; 
}

Queue.prototype.dequeue = function(){
	var result = this.storage[this.oldVal];
	delete this.storage[this.oldVal];;
	this.oldVal++;
	return result;
}


