/* Javascript code to check if two trees are identical */

/* A binary tree node */
class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

function preorder(root, v) {
    if (root == null) {
        // v.push_back(0);
        return;
    }
    v.push(root.data);
    if (root.left)
        preorder(root.left, v);
    if (!root.left)
        v.push(0);
    if (root.right)
        preorder(root.right, v);
    if (!root.right)
        v.push(0);
}

function isIdentical(root1, root2) {
    let v = [];
    let x = [];
    preorder(root1, v);
    preorder(root2, x);
    if (v.length != x.length)
        return 0;
    for (let i = 0; i < v.length; i++)
        if (x[i] != v[i])
            return 0;
    return 1;
}

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
    console.log("Both the trees are identical.\n");
}
else {
    console.log("Given trees are not identical.\n");
}
