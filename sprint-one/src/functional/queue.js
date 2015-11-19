var Queue = function() {
  var someInstance = {};

  var newVal = 1;
  var oldVal = 1;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[newVal] = value;
    newVal++;
  };

  someInstance.dequeue = function() {
    var deleteVal = storage[oldVal];
    delete storage[oldVal];
    oldVal++;
    return deleteVal;
  };

  someInstance.size = function() {
    return newVal-oldVal < 0 ? 0 : newVal-oldVal ; 
    
  };

  return someInstance;
};
