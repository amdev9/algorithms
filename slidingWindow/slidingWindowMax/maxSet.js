function maxSlidingWindow(arr, k) {
    const ans = [];
    const maxInWindow = [];

    // Initialize maxInWindow with the first k elements
    for (let i = 0; i < k; i++) {
        while (maxInWindow.length > 0 && arr[i] >= arr[maxInWindow[maxInWindow.length - 1]]) {
            maxInWindow.pop();
        }
        maxInWindow.push(i);
    }

    // The maximum element in the first window
    ans.push(arr[maxInWindow[0]]);

    // Process the remaining elements
    for (let i = k; i < arr.length; i++) {
        // Remove elements that are out of the current window
        while (maxInWindow.length > 0 && maxInWindow[0] <= i - k) {
            maxInWindow.shift();
        }

        // Remove elements that are not needed in the current window
        while (maxInWindow.length > 0 && arr[i] >= arr[maxInWindow[maxInWindow.length - 1]]) {
            maxInWindow.pop();
        }

        maxInWindow.push(i);
        ans.push(arr[maxInWindow[0]]);
    }

    return ans;
}

const arr = [2, 3, 7, 9, 5, 1, 6, 4, 3];
const k = 3;

const result = maxSlidingWindow(arr, k);

console.log("Maximum elements in each sliding window: " + result.join(' '));
