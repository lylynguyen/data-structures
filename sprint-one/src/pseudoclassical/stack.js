var Stack = function() {

  this.storage = {};
  this.stackSize = 0;

};

Stack.prototype.size = function(){
	return this.stackSize ; //< 0 ? 0 : this.stackSize;
};

Stack.prototype.pop = function(){
	if(this.stackSize===0){
		return false;
	}

   var result = this.storage[this.stackSize-1];
   delete this.storage[this.stackSize-1];
   this.stackSize--;
   return result;
};



Stack.prototype.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize++;  
};



