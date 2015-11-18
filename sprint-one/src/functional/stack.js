var Stack = function() {
  var someInstance = {};
  var stackSize = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[stackSize] = value;
    stackSize++;
  };

  someInstance.pop = function() {
    var deleteVar = storage[stackSize-1]; 
    delete storage[stackSize-1];      
    stackSize--;
    return deleteVar;
  };

  someInstance.size = function() {
    return stackSize < 0 ? 0 : stackSize;
  };

  return someInstance;
};
