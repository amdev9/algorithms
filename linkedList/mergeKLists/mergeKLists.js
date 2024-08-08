// A Linked List node
class Node {
    // Utility function to create a new node.
    constructor(key) {
        this.data = key;
        this.next = null;
    }
}

let head;
let temp;


/* Function to print nodes in
a given linked list */
function printList(node) {
    while (node != null) {
        console.log(node.data + " ");

        node = node.next;
    }
    console.log("<br>");
}



// The main function that
// takes an array of lists
// arr[0..last] and generates
// the sorted output
function mergeKLists(arr, last) {

    // console.log("----> ", arr[0], arr[1], arr[2])

    // Traverse form second list to last
    for (let i = 1; i <= last; i++) {
        while (true) {

            // head of both the lists,
            // 0 and ith list. 
            let head_0 = arr[0];
            let head_i = arr[i];
            // console.log("head_0", head_0 && head_0.data, "head_i", head_i && head_i.data)

            // Break if list ended
            if (head_i == null)
                break;

            // Smaller than first element
            if (head_0.data >= head_i.data) {

                // console.log("Smaller than first element ", head_i.next.data, head_0.data, head_i.data)
                arr[i] = head_i.next;
                head_i.next = head_0;
                arr[0] = head_i;
            }
            else {

                // Traverse the first list
                while (head_0.next != null) {

                    // Smaller than next element
                    if (head_0.next.data >= head_i.data) {
                        arr[i] = head_i.next;


                        head_i.next = head_0.next;

                        head_0.next = head_i;

                        break;
                    }

                    // go to next node
                    head_0 = head_0.next;

                    // if last node
                    if (head_0.next == null) {
                        arr[i] = head_i.next;
                        head_i.next = null;
                        head_0.next = head_i;
                        head_0.next.next = null;
                        break;
                    }
                }
            }
        }
    }
    return arr[0];
}


// Driver program to test
// above functions 
// Number of linked lists
let k = 3;
// Number of elements in each list
let n = 4;
// an array of pointers storing the
// head nodes of the linked lists
let arr = new Array(k);
arr[0] = new Node(1);
arr[0].next = new Node(3);
arr[0].next.next = new Node(5);
arr[0].next.next.next = new Node(7);

arr[1] = new Node(2);
arr[1].next = new Node(4);
arr[1].next.next = new Node(6);
arr[1].next.next.next = new Node(8);

arr[2] = new Node(0);
arr[2].next = new Node(9);
arr[2].next.next = new Node(10);
arr[2].next.next.next = new Node(11);

// Merge all lists
head = mergeKLists(arr, k - 1);
printList(head);



// Time complexity: O(N^K-1), Traversing N times on each of the K lists.