// defining the structure for tree nodes
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// defining the Solution class to check if a binary tree is
// balanced
class Solution {

    // helper function to determine if a binary tree is
    // balanced
    isBalancedfast(root) {

        // base case: if root is null, the tree is balanced
        // and has height 0
        if (root == null) {
            return [true, 0];
        }

        // recursively call isBalancedfast function on left
        // and right subtrees
        let left = this.isBalancedfast(root.left);
        let right = this.isBalancedfast(root.right);

        // retrieve whether left and right subtrees are
        // balanced
        let leftAns = left[0];
        let rightAns = right[0];

        // check the difference in heights of left and right
        // subtrees
        let diff = Math.abs(left[1] - right[1]) <= 1;

        // create an array to store the answer (whether the
        // tree is balanced) and its height
        let ans = [];

        // set the height of the current node
        ans[1] = Math.max(left[1], right[1]) + 1;

        // if both subtrees are balanced and their heights
        // differ by at most 1, the tree is balanced
        if (leftAns && rightAns && diff) {
            ans[0] = true;
        }
        // otherwise, the tree is not balanced
        else {
            ans[0] = false;
        }
        return ans;
    }

    // Function to check whether a binary tree is balanced
    // or not.
    isBalanced(root) {
        return this.isBalancedfast(root)[0];
    }
}

// create a binary tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.left.left = new Node(8);

// create an object of the Solution class
let obj = new Solution();

// check if the binary tree is balanced using the
// isBalanced function
if (obj.isBalanced(root)) {
    console.log("The given binary tree is balanced.");
}
else {
    console.log("The given binary tree is not balanced.");
}
