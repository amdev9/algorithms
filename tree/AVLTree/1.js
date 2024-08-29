// https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/avl-tree
// https://www.geeksforgeeks.org/insertion-in-an-avl-tree/

// https://www.youtube.com/watch?v=rbg7Qf8GkQ4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=13

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

// A utility function to get
// the height of the tree
function height(node) {
    if (node === null) {
        return 0;
    }
    return node.height;
}

// A utility function to right rotate 
// subtree rooted with y
function rightRotate(y) {
    const x = y.left;
    const T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = 1 + Math.max(height(y.left), height(y.right));
    x.height = 1 + Math.max(height(x.left), height(x.right));

    // Return new root
    return x;
}

// A utility function to left rotate subtree rooted with x
function leftRotate(x) {
    const y = x.right;
    const T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = 1 + Math.max(height(x.left), height(x.right));
    y.height = 1 + Math.max(height(y.left), height(y.right));

    // Return new root
    return y;
}

// Get balance factor of node
function getBalance(node) {
    if (node === null) {
        return 0;
    }
    return height(node.left) - height(node.right);
}

// Recursive function to insert a key in
// the subtree rooted with node
function insert(node, key) {

    // Perform the normal BST insertion
    if (node === null) {
        return new Node(key);
    }

    if (key < node.key) {
        node.left = insert(node.left, key);
    } else if (key > node.key) {
        node.right = insert(node.right, key);
    } else {
        // Equal keys are not allowed in BST
        return node;
    }

    // Update height of this ancestor node
    node.height = 1 + Math.max(height(node.left), height(node.right));

    // Get the balance factor of this ancestor node
    const balance = getBalance(node);

    // If this node becomes unbalanced, then there are 4 cases

    // Left Left Case
    if (balance > 1 && key < node.left.key) {
        return rightRotate(node);
    }

    // Right Right Case
    if (balance < -1 && key > node.right.key) {
        return leftRotate(node);
    }

    // Left Right Case
    if (balance > 1 && key > node.left.key) {
        node.left = leftRotate(node.left);
        return rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && key < node.right.key) {
        node.right = rightRotate(node.right);
        return leftRotate(node);
    }

    // Return the (unchanged) node pointer
    return node;
}

// A utility function to print preorder 
// traversal of the tree
function preOrder(root) {
    if (root !== null) {
        console.log(root.key + " ");
        preOrder(root.left);
        preOrder(root.right);
    }
}

// Driver code
let root = null;

// Constructing tree given in the above figure
root = insert(root, 10);
root = insert(root, 20);
root = insert(root, 30);
root = insert(root, 40);
root = insert(root, 50);
root = insert(root, 25);

/* The constructed AVL Tree would be 
              30 
            /   \ 
          20     40 
         /  \      \ 
       10   25     50 
*/

console.log("Preorder traversal :");
preOrder(root);

