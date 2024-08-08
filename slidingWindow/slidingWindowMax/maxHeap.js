class Pair {
    constructor(value, index) {
        this.value = value;
        this.index = index;
    }
}

function maxSlidingWindow(arr, k) {
    const ans = [];
    const heap = [];

    // Initialize the heap with the first k elements
    for (let i = 0; i < k; i++) {
        heap.push(new Pair(arr[i], i));
    }
    heap.sort((a, b) => b.value - a.value);

    // The maximum element in the first window
    ans.push(heap[0].value);

    // Process the remaining elements
    for (let i = k; i < arr.length; i++) {
        heap.push(new Pair(arr[i], i));

        // Remove elements that are outside the current window
        while (heap[0].index <= i - k) {
            heap.shift();
        }
        heap.sort((a, b) => b.value - a.value);

        // The maximum element in the current window
        ans.push(heap[0].value);
    }

    return ans;
}

const arr = [2, 3, 7, 9, 5, 1, 6, 4, 3];
const k = 3;

// Find the maximum element in each sliding window of size k
const result = maxSlidingWindow(arr, k);

// Print the results
for (const num of result) {
    console.log(num + " ");
}
