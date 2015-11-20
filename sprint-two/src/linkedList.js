var Node = function(param1) {
  
  var node = {};

  node.value = param1                                                                 ;
  node.next = null;

  return node;
};

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
  	var linkedListNode = Node(value);
    if(list.head === null){
      list.head = linkedListNode;
      list.tail = linkedListNode;
    } else {
      list.tail.next = linkedListNode;
      list.tail = linkedListNode;
    }
  };


  list.removeHead = function() {
    var currentHead;

    if(list.head !== null){
      currentHead = list.head;
      list.head = currentHead.next;
    }
    return currentHead.value;
  };

  list.contains = function(target) {
    

    var node = list.head;

    while(node !== null){
      if(node.value === target){               
        return true;
      }
      node = node.next;
    }

    return false;
    
  };
  return list;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
