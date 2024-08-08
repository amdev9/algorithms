// https://www.geeksforgeeks.org/sort-an-array-of-strings-in-lexicographical-order/


// Javascript code to implement the approach

// Function to sort the strings
// in lexicographical order
function Printlexiographically(N, arr) {

    // Sort the strings of the array
    arr.sort();

    for (let i = 0; i < N; i++) {

        // Print each string of the array
        console.log(arr[i] + "<br/>");
    }
}

// Driver code
let arr = ["bus", "bike", "apple"];
let N = arr.length;

// Function Call
Printlexiographically(N, arr);

// This code is contributed by sanjoy_62.


