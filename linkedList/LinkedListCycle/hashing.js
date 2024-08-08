// The idea is to insert the nodes in the hashmap and whenever a node is encountered that is already present in the hashmap then return true.


// Follow the steps below to solve the problem:

// Traverse the list individually and keep putting the node addresses in a Hash Table. 
// At any point, if NULL is reached then return false 
// If the next of the current nodes points to any of the previously stored nodes in Hash then return true.




// JavaScript program to detect loop in a linked list 
var head; // head of list

/* Linked list Node */
class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}
/* Inserts a new Node at front of the list. */
function push(new_data) {
    /*
     * 1 & 2: Allocate the Node & Put in the data
     */
    var new_node = new Node(new_data);

    /* 3. Make next of new Node as head */
    new_node.next = head;

    /* 4. Move the head to point to new Node */
    head = new_node;
}

// Returns true if there is a loop in linked
// list else returns false.
function detectLoop(h) {
    var s = new Set();
    while (h != null) {
        // If we have already has this node
        // in hashmap it means there is a cycle
        // (Because you we encountering the
        // node second time).
        if (s.has(h))
            return true;

        // If we are seeing the node for
        // the first time, insert it in hash
        s.add(h);

        h = h.next;
    }

    return false;
}

/* Driver program to test above function */


push(20);
push(4);
push(15);
push(10);

/* Create loop for testing */
head.next.next.next.next = head;

if (detectLoop(head))
    console.log("Loop Found");
else
    console.log("No Loop");


// Time complexity: O(N), Only one traversal of the loop is needed.
// Auxiliary Space: O(N), N is the space required to store the value in the hashmap.
