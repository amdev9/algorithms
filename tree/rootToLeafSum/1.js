// https://www.geeksforgeeks.org/root-to-leaf-path-sum-equal-to-a-given-number/

// Recursively move to the left and right subtree and at each call decrease the sum by the value of the current node
// If at any level the current node is a leaf node and the remaining sum is equal to zero then return true


// javascript program to print
// root to leaf path sum
// equal to a given number

/* A binary tree node has data, 
pointer to left child
and a pointer to right child */

class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

var root;

/*
Given a tree and a sum, 
return true if there is a path
from the root down to a leaf,
such that adding up all
the values along the path 
equals the given sum.

Strategy: subtract the node 
value from the sum when
recurring down, and check to 
see if the sum is 0 you reach the leaf node.
*/

function hasPathSum(node, sum) {
    var ans = false;
    var subSum = sum - node.data;
    if (subSum == 0 && node.left == null && node.right == null)
        return (ans = true);
    if (node.left != null)

        // ans || hasPathSum... has no utility if the ans is false 
        ans = ans || hasPathSum(node.left, subSum);

    if (node.right != null)

        // But if it is true then we can afunction calling hasPathSum 
        // here as answer has already been found
        ans = ans || hasPathSum(node.right, subSum);
    return (ans);
}

// Driver Code

var sum = 21;

/* Constructed binary tree is
    10
    / \
8	 2
/ \ /
3 5 2
*/

var root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(2);

if (hasPathSum(root, sum))
    console.log(
        "There is a root to leaf path with sum "
        + sum);
else
    console.log(
        "There is no root to leaf path with sum "
        + sum);

// This code is contributed by gauravrajput1 
