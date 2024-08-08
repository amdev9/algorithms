class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

function hasPathSum(root, targetSum) {
    if (root === null) {
        return false;
    }

    const stack = [];
    const sums = [];
    stack.push(root);
    sums.push(root.data);

    while (stack.length > 0) {
        const node = stack.pop();
        const sum = sums.pop();

        if (node.left === null && node.right === null) {
            if (sum === targetSum) {
                return true;
            }
        }

        if (node.left !== null) {
            stack.push(node.left);
            sums.push(sum + node.left.data);
        }
        if (node.right !== null) {
            stack.push(node.right);
            sums.push(sum + node.right.data);
        }
    }

    return false;
}

const root = new Node(10);
root.left = new Node(8);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(2);

const targetSum = 23;
if (hasPathSum(root, targetSum)) {
    console.log("There is a root-to-leaf path with sum " + targetSum);
} else {
    console.log("There is no root-to-leaf path with sum " + targetSum);
}
