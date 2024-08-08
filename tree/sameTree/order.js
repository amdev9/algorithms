// JavaScript program for above approach
class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

// Utility function to check inorder traversal
function inOrder(root, sol) {
    if (root == null) return;
    inOrder(root.left, sol);
    sol.push(root.data);
    inOrder(root.right, sol);
}

// Utility function to check preorder traversal
function preOrder(root, sol) {
    if (root == null) return;
    sol.push(root.data);
    preOrder(root.left, sol);
    preOrder(root.right, sol);
}

// Utility function to check postorder traversal
function postOrder(root, sol) {
    if (root == null) return;
    postOrder(root.left, sol);
    postOrder(root.right, sol);
    sol.push(root.data);
}

// Function to check if two trees are identical
function isIdentical(root1, root2) {
    // Code Here
    // Create two vector to store traversals
    let res1 = [];
    let res2 = [];

    // check inOrder
    inOrder(root1, res1);
    inOrder(root2, res2);
    if (res1.toString() != res2.toString()) return false;

    // clear previous result to reuse vector
    res1 = [];
    res2 = [];
    // check PreOrder
    preOrder(root1, res1);
    preOrder(root2, res2);
    if (res1.toString() != res2.toString()) return false;

    // clear previous result to reuse vector
    res1 = [];
    res2 = [];
    // check PostOrder
    postOrder(root1, res1);
    postOrder(root2, res2);
    if (res1.toString() != res2.toString()) return false;

    return true;
}

// Driver code
let root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);

let root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
root2.left.left = new Node(4);
root2.left.right = new Node(5);
// Function call
if (isIdentical(root1, root2)) {
    console.log("Both the trees are identical.");
}
else {
    console.log("Given trees are not identical.");
}

// This code is contributed by adityamaharshi
