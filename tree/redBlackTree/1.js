// https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/red-black-tree
// https://www.geeksforgeeks.org/insertion-in-red-black-tree/

// Explanation 
// https://www.youtube.com/watch?v=UaLIHuR1t8Q&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=14

{/* <script> */ }
// Javascript program for the above approach

// Node class represents a node in the Red-Black Tree

// TODO: fix document.write to nodejs version
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.colour = 'R';
        this.parent = null;
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
        this.ll = false; // Left-Left Rotation flag
        this.rr = false; // Right-Right Rotation flag
        this.lr = false; // Left-Right Rotation flag
        this.rl = false; // Right-Left Rotation flag
    }

    // Function to perform left rotation
    rotateLeft(node) {
        const x = node.right;
        const y = x.left;
        x.left = node;
        node.right = y;
        node.parent = x;

        if (y !== null)
            y.parent = node;

        return x;
    }

    // Function to perform right rotation
    rotateRight(node) {
        const x = node.left;
        const y = x.right;
        x.right = node;
        node.left = y;
        node.parent = x;

        if (y !== null)
            y.parent = node;

        return x;
    }

    // Helper function for insertion
    insertHelp(root, data) {
        let f = false;

        if (root === null)
            return new Node(data);
        else if (data < root.data) {
            root.left = this.insertHelp(root.left, data);
            root.left.parent = root;

            if (root !== this.root) {
                if (root.colour === 'R' && root.left.colour === 'R')
                    f = true;
            }
        } else {
            root.right = this.insertHelp(root.right, data);
            root.right.parent = root;

            if (root !== this.root) {
                if (root.colour === 'R' && root.right.colour === 'R')
                    f = true;
            }
        }

        // Rotate and recolor based on flags
        if (this.ll) {
            root = this.rotateLeft(root);
            root.colour = 'B';
            root.left.colour = 'R';
            this.ll = false;
        } else if (this.rr) {
            root = this.rotateRight(root);
            root.colour = 'B';
            root.right.colour = 'R';
            this.rr = false;
        } else if (this.rl) {
            root.right = this.rotateRight(root.right);
            root.right.parent = root;
            root = this.rotateLeft(root);
            root.colour = 'B';
            root.left.colour = 'R';
            this.rl = false;
        } else if (this.lr) {
            root.left = this.rotateLeft(root.left);
            root.left.parent = root;
            root = this.rotateRight(root);
            root.colour = 'B';
            root.right.colour = 'R';
            this.lr = false;
        }

        // Handle RED-RED conflict
        if (f) {
            if (root.parent.right === root) {
                if (root.parent.left === null || root.parent.left.colour === 'B') {
                    if (root.left !== null && root.left.colour === 'R')
                        this.rl = true;
                    else if (root.right !== null && root.right.colour === 'R')
                        this.ll = true;
                } else {
                    root.parent.left.colour = 'B';
                    root.colour = 'B';
                    if (root.parent !== this.root)
                        root.parent.colour = 'R';
                }
            } else {
                if (root.parent.right === null || root.parent.right.colour === 'B') {
                    if (root.left !== null && root.left.colour === 'R')
                        this.rr = true;
                    else if (root.right !== null && root.right.colour === 'R')
                        this.lr = true;
                } else {
                    root.parent.right.colour = 'B';
                    root.colour = 'B';
                    if (root.parent !== this.root)
                        root.parent.colour = 'R';
                }
            }
            f = false;
        }

        return root;
    }

    // Public method to insert data into the tree
    insert(data) {
        if (this.root === null) {
            this.root = new Node(data);
            this.root.colour = 'B';
        } else
            this.root = this.insertHelp(this.root, data);
    }

    // Inorder traversal helper function
    inorderTraversalHelper(node) {
        if (node !== null) {
            this.inorderTraversalHelper(node.left);
            document.write(node.data);

            this.inorderTraversalHelper(node.right);
        }

    }

    // Public method to perform inorder traversal
    inorderTraversal() {
        this.inorderTraversalHelper(this.root);
    }

    // Print tree helper function
    printTreeHelper(root, space) {
        let i;
        if (root !== null) {
            space = space + 10;
            this.printTreeHelper(root.right, space);
            document.write("<br>");
            for (i = 10; i < space; i++) {
                document.write(' ');
            }
            document.write(root.data);
            document.write("<br>");
            this.printTreeHelper(root.left, space);
        }
    }

    // Public method to print the tree
    printTree() {
        this.printTreeHelper(this.root, 0);
    }
}

// Test the RedBlackTree
const t = new RedBlackTree();
const arr = [1, 4, 6, 3, 5, 7, 8, 2, 9];
for (let i = 0; i < 9; i++) {
    t.insert(arr[i]);
    document.write("<br>");
    t.inorderTraversal();
}
t.printTree();

// This code is contributed by Susobhan Akhuli
// </script>
