class Node {
    constructor(key) {
        this.data = key;
        this.next = null;
    }
}

// Comparator function to compare Node data
function nodeComparator(k1, k2) {
    if (k1.data < k2.data) return -1;
    if (k1.data > k2.data) return 1;
    return 0;
}

class PriorityQueue {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    enqueue(value) {
        this.heap.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let element = this.heap[index],
                parentIndex = Math.floor((index - 1) / 2),
                parent = this.heap[parentIndex];
            if (this.compare(element, parent) < 0) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    dequeue() {
        let max = this.heap[0];
        let end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown(0);
        }
        return max;
    }

    sinkDown(index) {
        let left = 2 * index + 1,
            right = 2 * index + 2,
            largest = index;

        if (
            left < this.heap.length &&
            this.compare(this.heap[left], this.heap[largest]) > 0
        ) {
            largest = left;
        }

        if (
            right < this.heap.length &&
            this.compare(this.heap[right], this.heap[largest]) > 0
        ) {
            largest = right;
        }

        if (largest !== index) {
            [this.heap[largest], this.heap[index]] = [
                this.heap[index],
                this.heap[largest],
            ];
            this.sinkDown(largest);
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function mergeKLists(arr, K) {
    const queue = new PriorityQueue(nodeComparator);
    const at = new Array(K);
    const head = new Node(0);
    let last = head;

    // Push the head nodes of all the k lists in 'queue'
    for (let i = 0; i < K; i++) {
        if (arr[i] !== null) {
            queue.enqueue(arr[i]);
        }
    }

    // Handles the case when k = 0
    // or lists have no elements in them
    if (queue.isEmpty()) return null;

    // Loop till 'queue' is not empty
    while (!queue.isEmpty()) {
        // Get the top element of 'queue'
        const curr = queue.dequeue();

        // Add the top element of 'queue' to the resultant merged list
        last.next = curr;
        last = last.next;

        // Check if there is a node next to the 'top' node
        // in the list of which 'top' node is a member
        if (curr.next !== null) {
            // Push the next node of top node in 'queue'
            queue.enqueue(curr.next);
        }
    }

    // Address of head node of the required merged list
    return head.next;
}

// Print linked list
function printList(node) {
    let str = "";
    while (node !== null) {
        str += `${node.data} `;
        node = node.next;
    }
    console.log(str);
}

// Testing
const N = 3;

// array to store head of linkedlist
const a = new Array(N);

// Linkedlist1
const head1 = new Node(1);
a[0] = head1;
head1.next = new Node(3);
head1.next.next = new Node(5);
head1.next.next.next = new Node(7);

// Limkedlist2
const head2 = new Node(2);
a[1] = head2;
head2.next = new Node(4);
head2.next.next = new Node(6);
head2.next.next.next = new Node(8);

// Linkedlist3
const head3 = new Node(0);
a[2] = head3;
head3.next = new Node(9);
head3.next.next = new Node(10);
head3.next.next.next = new Node(11);

const res = mergeKLists(a, N);

if (res !== null) printList(res);
console.log();

