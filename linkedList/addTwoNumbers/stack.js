// JavaScript program to add two numbers represented by Linked
// Lists using Stack
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function newnode(data) {
    const x = new Node();
    x.data = data;
    return x;
}

// function that returns the sum of two numbers represented
// by linked lists
function addTwoNumbers(l1, l2) {
    let prev = null;
    // Create 3 stacks
    const s1 = [];
    const s2 = [];
    const s3 = [];
    // Fill first stack with first List Elements
    while (l1 !== null) {
        s1.push(l1);
        l1 = l1.next;
    }
    // Fill second stack with second List Elements
    while (l2 !== null) {
        s2.push(l2);
        l2 = l2.next;
    }
    let carry = 0;
    // Fill the third stack with the sum of first and second
    // stack
    while (s1.length !== 0 && s2.length !== 0) {
        const sum = s1[s1.length - 1].data + s2[s2.length - 1].data + carry;
        const temp = newnode(sum % 10);
        s3.push(temp);
        if (sum > 9) {
            carry = 1;
        } else {
            carry = 0;
        }
        s1.pop();
        s2.pop();
    }
    while (s1.length !== 0) {
        const sum = carry + s1[s1.length - 1].data;
        const temp = newnode(sum % 10);
        s3.push(temp);
        if (sum > 9) {
            carry = 1;
        } else {
            carry = 0;
        }
        s1.pop();
    }
    while (s2.length !== 0) {
        const sum = carry + s2[s2.length - 1].data;
        const temp = newnode(sum % 10);
        s3.push(temp);
        if (sum > 9) {
            carry = 1;
        } else {
            carry = 0;
        }
        s2.pop();
    }
    // If carry is still present create a new node with
    // value 1 and push it to the third stack
    if (carry === 1) {
        const temp = newnode(1);
        s3.push(temp);
    }
    // Link all the elements inside third stack with each
    // other
    if (s3.length !== 0) prev = s3[s3.length - 1];
    while (s3.length !== 0) {
        const temp = s3[s3.length - 1];
        s3.pop();
        if (s3.length === 0) {
            temp.next = null;
        } else {
            temp.next = s3[s3.length - 1];
        }
    }
    return prev;
}

// utility functions
// Function that displays the List
function Display(head) {
    if (head === null) {
        return;
    }
    let output = '';
    while (head.next !== null) {
        output += head.data + ' -> ';
        head = head.next;
    }
    output += head.data;
    console.log(output);
}


// Function that adds element at the end of the Linked List
function push(head_ref, d) {
    const new_node = newnode(d);
    new_node.next = null;
    if (head_ref === null) {
        new_node.next = head_ref;
        head_ref = new_node;
        return;
    } // Otherwise, traverse till the last node and add the new node
    let last = head_ref;
    while (last.next !== null) {
        last = last.next;
    }
    last.next = new_node;
}

// sample test cases
// First Linked List: 7 -> 5 -> 9 -> 4 -> 6
const l1 = new Node(7);
l1.next = new Node(5);
l1.next.next = new Node(9);
l1.next.next.next = new Node(4);
l1.next.next.next.next = new Node(6);

// Second Linked List: 8 -> 4
const l2 = new Node(8);
l2.next = new Node(4);


console.log("First List :");
Display(l1);
console.log("Second List :");
Display(l2);

const result = addTwoNumbers(l1, l2);

console.log("Resultant List:");
Display(result);

// TODO: https://www.geeksforgeeks.org/add-two-numbers-represented-by-linked-list/