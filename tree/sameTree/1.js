// https://www.geeksforgeeks.org/write-c-code-to-determine-if-two-trees-are-identical/

// JavaScript program to see if two trees are identical

class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

let root1, root2;

/* Given two trees, return true if they are
   structurally identical */
function identicalTrees(a, b) {
    /*1. both empty */
    if (a == null && b == null)
        return true;

    /* 2. both non-empty -> compare them */
    if (a != null && b != null)
        return (a.data == b.data
            && identicalTrees(a.left, b.left)
            && identicalTrees(a.right, b.right));

    /* 3. one empty, one not -> false */
    return false;
}

root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);
root1.left.right = new Node(5);

root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
root2.left.left = new Node(4);
root2.left.right = new Node(5);

if (identicalTrees(root1, root2))
    console.log("Both trees are identical");
else
    console.log("Trees are not identical");

