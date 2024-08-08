
// javascript program for above approach

// Create a class Node to enter 
// values and address in the list
class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}
var head = null;
// Function to reverse the 
// linked list
function reverseLL() {

    // Create a stack "s"
    // of Node type
    var s = [];
    var temp = head;
    while (temp.next != null) {

        // Push all the nodes 
        // in to stack
        s.push(temp);
        temp = temp.next;
    }
    head = temp;

    while (s.length != 0) {

        // Store the top value of
        // stack in list
        temp.next = s.pop();



        // update the next pointer in the
        // in the list
        temp = temp.next;
    }
    temp.next = null;
}

// Function to Display 
// the elements in List
function printlist(temp) {
    while (temp != null) {
        console.log(temp.data + " ");
        temp = temp.next;
    }
}

// Program to insert back of the 
// linked list
function insert_back(value) {

    // we have used insertion at back method
    // to enter values in the list.(eg:
    // head.1.2.3.4.Null)
    var temp = new Node(value);
    temp.next = null;

    // If *head equals to null
    if (head == null) {
        head = temp;
        return;
    }
    else {
        var last_node = head;
        while (last_node.next != null) {
            last_node = last_node.next;
        }
        last_node.next = temp;
        return;
    }
}

// Driver Code

insert_back(1);
insert_back(2);
insert_back(3);
insert_back(4);
console.log("Given linked list\n");
printlist(head);
reverseLL();
console.log("<br />Reversed linked list\n");
printlist(head);
