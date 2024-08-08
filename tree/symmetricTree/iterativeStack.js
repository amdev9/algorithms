// Node class for binary tree
class Node {
    constructor(item) {
        this.key = item;
        this.left = null;
        this.right = null;
    }
}

// Returns true if a tree is symmetric i.e. mirror image of itself
function isSymmetric(root) {
    // If the root is null, then the binary tree is symmetric.
    if (root === null) {
        return true;
    }

    // Create a stack to store the left and right subtrees of the root.
    const stack = [];
    stack.push(root.left);
    stack.push(root.right);

    // Continue the loop until the stack is empty.
    while (stack.length > 0) {
        // Pop the left and right subtrees from the stack.
        const node1 = stack.pop();
        const node2 = stack.pop();

        // If both nodes are null, continue the loop.
        if (node1 === null && node2 === null) {
            continue;
        }

        // If one of the nodes is null, the binary tree is not symmetric.
        if (node1 === null || node2 === null) {
            return false;
        }

        // If the values of the nodes are not equal, the binary tree is not symmetric.
        if (node1.key !== node2.key) {
            return false;
        }

        // Push the left and right subtrees of the left and right nodes onto the stack in the opposite order.
        stack.push(node1.left);
        stack.push(node2.right);
        stack.push(node1.right);
        stack.push(node2.left);
    }

    // If the loop completes, the binary tree is symmetric.
    return true;
}

// Driver code
(function () {
    // Let us construct the Tree shown in the above figure
    const root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(2);
    root.left.left = new Node(3);
    root.left.right = new Node(4);
    root.right.left = new Node(4);
    root.right.right = new Node(3);

    if (isSymmetric(root)) {
        console.log("Symmetric");
    } else {
        console.log("Not symmetric");
    }
})();
