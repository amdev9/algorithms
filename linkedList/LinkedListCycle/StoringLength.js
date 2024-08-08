// Javascript program to return first node of loop
class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}


// A utility function to print a linked list
function printList(head) {
    while (head != null) {
        console.log(head.data + " ");
        head = head.next;
    }
    console.log("</br>");
}

/*returns distance between first and last
node every time last node moves forwards*/
function distance(first, last) {

    /*counts no of nodes between first and last*/
    let counter = 0;
    let curr;
    curr = first;

    while (curr != last) {
        counter += 1;
        curr = curr.next;
    }
    return counter + 1;
}

// Function to detect first node of loop
// in a linked list that may contain loop
function detectLoop(head) {

    // Create a temporary node
    let temp = new Node();
    let first, last;

    /*first always points to head*/
    first = head;

    /*last pointer initially points to head*/
    last = head;

    /*current_length stores no of nodes
    between current position of first and last*/
    let current_length = 0;

    /*current_length stores no of nodes between
    previous position of first and last*/
    let prev_length = -1;

    while (current_length > prev_length &&
        last != null) {

        // Set prev_length to current length 
        // then update the current length
        prev_length = current_length;

        // Distance is calculated
        current_length = distance(first, last);

        // Last node points the next node
        last = last.next;
    }

    if (last == null) {
        return false;
    }
    else {
        return true;
    }
}

// Driver code
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

/* Create a loop for testing(5 is pointing to 3) */
head.next.next.next.next.next = head.next.next;
let found = detectLoop(head);
if (found)
    console.log("Loop Found");
else
    console.log("No Loop Found");

// This code is contributed by divyeshrabadiya07

