

// ------------------------
// Instantiate a new graph
var Graph = function() {

	this.graph = {};


};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.graph[node] ={};


};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) { //target

var result =  false;
		
    for(var key in this.graph){
    	if(parseInt(key) === node){
    	   result = true;
    	}
    }
	return result;   

};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {


	delete this.graph[node];
	

};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	return this.graph[fromNode][toNode] !== undefined;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.graph[fromNode][toNode] = true;
    this.graph[toNode][fromNode] = true;

};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	delete this.graph[fromNode][toNode];
    delete this.graph[toNode][fromNode]; 
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for(var key in this.graph){
		cb(key);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


