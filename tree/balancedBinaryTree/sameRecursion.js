// Calculating the height in the same recursion rather than calling a height() function separately. 

// For each node make two recursion calls – one for left subtree and the other for the right subtree. 
// Based on the heights returned from the recursion calls, decide if the subtree whose root is the current node is height-balanced or not. 
// If it is balanced then return the height of that subtree. Otherwise, return -1 to denote that the subtree is not height-balanced.



// JavaScript program to check if Binary tree is height-balanced

// Class to define a binary tree node
class Node {

    // Constructor to create node of
    // binary tree
    constructor(data) {
        this.data = data
        this.left = this.right = null
    }
}

// Function to check if the tree is height balanced
function isBalanced(root) {
    if (root == null)
        return 0;
    let lh = isBalanced(root.left);
    if (lh == -1)
        return -1;
    let rh = isBalanced(root.right);
    if (rh == -1)
        return -1;

    if (Math.abs(lh - rh) > 1)
        return -1;
    else
        return Math.max(lh, rh) + 1;
}

// Driver code
let root = new Node(10)
root.left = new Node(5)
root.right = new Node(30)
root.right.left = new Node(15)
root.right.right = new Node(20)

if (isBalanced(root) > 0)
    console.log('Balanced', "</br>")
else
    console.log('Not Balanced', "</br>")

// This code is contributed by shinjanpatra
