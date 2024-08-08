// Javascript implementation of above approach

/* Linked list Node */
class Node {
    constructor(d) {
        this.data = d;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    /* Function to insert a node at the
    beginning of the Singly Linked List */
    push(new_data) {
        /* allocate node */
        let new_node = new Node(new_data);
        /* link the old list of the new node */
        new_node.next = this.head;
        /* move the head to point to the new node */
        this.head = new_node;
    }
    // function to linked list
    printList() {
        let n = this.head;
        while (n !== null) {
            console.log(n.data + " ");
            n = n.next;
        }
        console.log();
    }
}

// function that work on addition operation.
function addTwoLists(first, second) {
    let num1 = 0,
        num2 = 0;
    //here we get num1 form first linked list.
    while (first.head !== null) {
        num1 = num1 * 10 + first.head.data;
        first.head = first.head.next;
    }
    // here we get num2 form second linked list.
    while (second.head !== null) {
        num2 = num2 * 10 + second.head.data;
        second.head = second.head.next;
    }
    // here we add both number.
    let num3 = num1 + num2;
    let temp = new LinkedList();
    //Node* result=temp;
    // convert num3 into linked list.
    while (num3 !== 0) {
        let last = num3 % 10;
        temp.push(last);
        num3 = Math.floor(num3 / 10);
    }

    // finally return resultant linked list.
    return temp;
}

let first = new LinkedList();
let second = new LinkedList();
first.push(6);
first.push(4);
first.push(9);
first.push(5);
first.push(7);

second.push(4);
second.push(8);

let ans = addTwoLists(first, second);

console.log("Sum is : ");
ans.printList();

// this code is contributed by bhardwajji.