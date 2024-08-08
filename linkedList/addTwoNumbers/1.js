class Solution {
    // Function to reverse a list
    reverse(head) {
        if (head === null || head.next === null) {
            return head;
        }
        let prev = null;
        let next = null;
        let curr = head;
        while (curr !== null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        head = prev;
        return head;
    }

    // Function to add two numbers represented by linked list.
    addTwoLists(first, second) {
        // reverse the two lists
        let curr1 = this.reverse(first);
        let curr2 = this.reverse(second);

        // res is head node of the resultant list
        let sum = 0;
        let carry = 0;
        let res = null;
        let prev = null;

        // while both lists have at least one node
        while (curr1 !== null || curr2 !== null) {
            // Calculating the sum of the last digits
            sum = carry + (curr1 ? curr1.data : 0) + (curr2 ? curr2.data : 0);

            // update carry for next calculation
            carry = (sum >= 10 ? 1 : 0);

            // update sum if it is greater than 10
            sum = sum % 10;

            // Create a new node with sum as data
            let temp = new Node(sum);

            // if this is the first node then set it as head of the resultant list
            if (res === null) {
                res = temp;
            } else {
                // If this is not the first node then connect it to the rest.
                prev.next = temp;
            }

            // Set prev for next insertion
            prev = temp;

            // Move first and second pointers to next nodes
            if (curr1) {
                curr1 = curr1.next;
            }
            if (curr2) {
                curr2 = curr2.next;
            }
        }

        // if carry from previous sums is remaining
        if (carry > 0) {
            prev.next = new Node(carry);
        }

        // Reverse the resultant answer
        let ans = this.reverse(res);
        return ans;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insert(val) {
        if (this.head === null) {
            this.head = new Node(val);
            this.tail = this.head;
        } else {
            this.tail.next = new Node(val);
            this.tail = this.tail.next;
        }
    }
}

// Utility function to print the list
function printList(n) {
    while (n) {
        console.log(n.data + " ");
        n = n.next;
    }
    console.log();
}

// Driver Code
let arr1 = [7, 5, 9, 4, 6];
let LL1 = new LinkedList();
for (let i = 0; i < arr1.length; i++) {
    LL1.insert(arr1[i]);
}
console.log("First list is");
printList(LL1.head);

let arr2 = [8, 4];
let LL2 = new LinkedList();
for (let i = 0; i < arr2.length; i++) {
    LL2.insert(arr2[i]);
}
console.log("Second list is");
printList(LL2.head);

// Function Call
let res = new Solution().addTwoLists(LL1.head, LL2.head);
console.log("Resultant list is", end = " ")
printList(res)