// Javascript implementation to find k
// elements with max occurrence.

function print_N_mostFrequentNumber(arr, N, K) {
    let mp = new Map();
    // Put count of all the
    // distinct elements in Map
    // with element as the key &
    // count as the value.
    for (let i = 0; i < N; i++) {

        // Get the count for the
        // element if already
        // present in the Map or
        // get the default value
        // which is 0.
        if (!mp.has(arr[i]))
            mp.set(arr[i], 0);

        mp.set(arr[i],
            mp.get(arr[i]) + 1);
    }

    // Create a Priority Queue
    // to sort based on the
    // count or on the key if the
    // count is same
    let queue = [...mp];

    queue.sort(function (a, b) {
        if (a[1] == b[1]) {
            return b[0] - a[0];
        }
        else {
            return b[1] - a[1];
        }
    });

    console.log(K + " numbers with most " + "occurrences are: ")
    for (let i = 0; i < K; i++) {
        console.log(queue[i][0] + " ");
    }
}

// Driver's Code
let arr = [3, 1, 4, 4, 5, 2, 6, 1];
let N = arr.length;
let K = 2;

// Function call
print_N_mostFrequentNumber(arr, N, K);

// This code is contributed by avanitrachhadiya2155
