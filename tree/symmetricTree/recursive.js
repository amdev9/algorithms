// Javascript program to check is binary
// tree is symmetric or not

class Node {

    constructor(item) {
        this.key = item;
        this.left = null;
        this.right = null;
    }
}

var root = null;

// returns true if trees with roots
// as root1 and root2 are mirror
function isMirror(node1, node2) {
    // if both trees are empty,
    // then they are mirror image
    if (node1 == null && node2 == null)
        return true;

    // For two trees to be mirror images,
    // the following three conditions must be true
    // 1 - Their root node's key must be same
    // 2 - left subtree of left tree and right 
    // subtree of right tree have to be mirror images
    // 3 - right subtree of left tree and left subtree
    // of right tree have to be mirror images
    if (node1 != null && node2 != null
        && node1.key == node2.key)
        return (isMirror(node1.left, node2.right)
            && isMirror(node1.right, node2.left));

    // if none of the above conditions
    // is true then root1 and root2 are
    // mirror images
    return false;
}

// returns true if the tree is symmetric
// i.e mirror image of itself
function isSymmetric() {

    // check if tree is mirror of itself
    return isMirror(root, root);
}

// Driver Code
root = new Node(1);
root.left = new Node(2);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(4);
root.right.right = new Node(3);
var output = isSymmetric();
if (output == true)
    console.log("Symmetric");
else
    console.log("Not symmetric");

// This code is contributed by rrrtnx.
