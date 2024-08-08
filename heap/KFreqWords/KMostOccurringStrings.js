// https://www.geeksforgeeks.org/k-most-occurring-strings/

// Javascript program for the above approach

// Function that returns list of K
// most frequent strings
function frequentWords(arr, K) {
    // Hash map to store the frequency
    // of each string
    var Freq = new Map();

    // Set the default frequency of
    // each string 0
    for (var word of arr) {
        Freq.set(word, Freq.has(word) ? Freq.get(word) : 0);
    }



    // Using a priority queue to store
    // the strings in accordance of the
    // frequency and alphabetical order
    // (if frequency is equal)
    // Lambda expression is used set the
    // priority, if frequencies are not
    // equal than the string with greater
    // frequency is returned else the
    // string which is lexically smaller
    // is returned

    var Order = [];



    // Traverse the HashMap
    for (var word of [...Freq.keys()]) {
        Order.push(word);
        // Remove top (N - K) elements
        if (Order.length > K) {
            Order.pop();
        }
    }

    console.log(Order)
    // Order queue has K most frequent
    // strings in a reverse order
    var ans = [];
    Order.sort((a, b) => a[0] - b[0]);
    while (Order.length != 0) {
        ans.push(Order[Order.length - 1])
        Order.pop();
    }
    // Reverse the ArrayList so as
    // to get in the desired order
    ans.reverse();
    return ans;
}

// Driver Code
var N = 7, K = 2;

// Given array
var arr = [];
arr.push("bik");
arr.push("bus");
arr.push("bus");
arr.push("bus");
arr.push("car");
arr.push("car");
arr.push("bik");

// Function Call

var ans = frequentWords(arr, K);

// Print the K most occurring strings
for (var word of ans) {
    console.log(word);
}

// This code is contributed by noob2000.
