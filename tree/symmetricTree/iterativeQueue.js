//Javascript code for the above approach
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

function isSymmetric(root) {
    if (root === null) {
        return true;
    }

    const q = [];
    q.push(root);
    q.push(root);

    while (q.length > 0) {
        const leftNode = q.shift();
        const rightNode = q.shift();

        // If both leftNode and rightNode are null, continue
        // to the next iteration
        if (leftNode === null && rightNode === null) {
            continue;
        }

        // If either leftNode or rightNode is null or their
        // data is not equal, return false
        if (leftNode === null || rightNode === null || leftNode.data !== rightNode.data) {
            return false;
        }

        // Pushing the left and right nodes of the current
        // node into the queue
        q.push(leftNode.left);
        q.push(rightNode.right);
        q.push(leftNode.right);
        q.push(rightNode.left);
    }
    return true;
}

// Driver Code
function main() {
    // Creating a binary tree
    const root = new Node(5);
    root.left = new Node(1);
    root.right = new Node(1);
    root.left.left = new Node(2);
    root.right.right = new Node(2);

    // Checking if the binary tree is symmetric or not
    if (isSymmetric(root)) {
        console.log("The binary tree is symmetric");
    } else {
        console.log("The binary tree is not symmetric");
    }
}

main();
