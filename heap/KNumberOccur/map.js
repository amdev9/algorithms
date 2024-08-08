// https://www.geeksforgeeks.org/find-k-numbers-occurrences-given-array/
// create a Map to store the element-frequency pair. Map is used to perform insertion and updation in constant time. Then sort the element-frequency pair in decreasing order of frequency. This gives the information about each element and the number of times they are present in the array. To get K elements of the array, print the first K elements of the sorted array.

// Follow the given steps to solve the problem:

// Create a map mp, to store key-value pair, i.e. element-frequency pair.
// Traverse the array from start to end.
// For every element in the array update mp[array[i]]++
// Store the element-frequency pair in a vector and sort the vector in decreasing order of frequency.
// Print the first k elements of the sorted array.

// JavaScript implementation to find
// K elements with max occurrence.

function print_N_mostFrequentNumber(arr, N, K) {

    let mp = new Map();

    // Put count of all the
    // distinct elements in Map
    // with element as the key &
    // count as the value.
    for (let i = 0; i < N; i++) {

        // Get the count for the
        // element if already present in the
        // Map or get the default value which is 0.

        if (mp.has(arr[i])) {
            mp.set(arr[i], mp.get(arr[i]) + 1)
        } else {
            mp.set(arr[i], 1)
        }
    }

    // Create a list from elements of HashMap
    let list = [...mp];

    // Sort the list
    list.sort((o1, o2) => {
        if (o1[1] == o2[1])
            return o2[0] - o1[0];
        else
            return o2[1] - o1[1];
    })

    console.log(K + " numbers with most occurrences are: ");
    for (let i = 0; i < K; i++)
        console.log(list[i][0] + " ");
}

// Driver's Code
let arr = [3, 1, 4, 4, 5, 2, 6, 1];
let N = arr.length;
let K = 2;

// Function call
print_N_mostFrequentNumber(arr, N, K);
