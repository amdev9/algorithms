// Definition for singly-linked list.
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Function to merge K sorted linked lists.
 * @param {ListNode[]} lists - An array of linked list nodes.
 * @return {ListNode} - The merged linked list.
 */
const mergeKLists = (lists) => {
    const mergeTwoLists = (l1, l2) => {
        if (!l1) return l2;
        if (!l2) return l1;

        if (l1.val < l2.val) {
            l1.next = mergeTwoLists(l1.next, l2);
            return l1;
        } else {
            l2.next = mergeTwoLists(l1, l2.next);
            return l2;
        }
    };

    const mergeKListsRecursively = (lists, start, end) => {
        if (start === end) {
            return lists[start];
        }
        const mid = Math.floor((start + end) / 2);
        const left = mergeKListsRecursively(lists, start, mid);
        const right = mergeKListsRecursively(lists, mid + 1, end);
        return mergeTwoLists(left, right);
    };

    if (lists.length === 0) return null;
    return mergeKListsRecursively(lists, 0, lists.length - 1);
};

// Driver program to test above functions
const k = 3; // Number of linked lists

// An array of linked list nodes storing the head nodes of the linked lists
const arr = [];

arr[0] = new ListNode(1);
arr[0].next = new ListNode(3);
arr[0].next.next = new ListNode(5);
arr[0].next.next.next = new ListNode(7);

arr[1] = new ListNode(2);
arr[1].next = new ListNode(4);
arr[1].next.next = new ListNode(6);
arr[1].next.next.next = new ListNode(8);

arr[2] = new ListNode(0);
arr[2].next = new ListNode(9);
arr[2].next.next = new ListNode(10);
arr[2].next.next.next = new ListNode(11);

const head = mergeKLists(arr);

// Function to print nodes in a given linked list
const printList = (node) => {
    while (node !== null) {
        process.stdout.write(`${node.val} `);
        node = node.next;
    }
    console.log();
};

printList(head);