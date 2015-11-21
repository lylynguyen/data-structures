var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
//var item = item.toString();
	this._storage[item] = 1;

}
  
setPrototype.contains = function(item) {
	for(var key in this._storage){}
	console.dir(this._storage);
	if(this._storage[item] === undefined){
		console.dir(this._storage);
		return false;
	}
	return true;
};

setPrototype.remove = function(item) {
	delete this._storage[item];

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
