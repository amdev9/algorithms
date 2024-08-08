
// https://www.geeksforgeeks.org/check-if-pair-with-given-sum-exists-in-array/

// JavaScript program to check if given array
// has 2 elements whose sum is equal
// to the given value

// Javascript implementation using Hashing

function printpairs(arr, sum) {
    let s = new Set();
    for (let i = 0; i < arr.length; ++i) {
        let temp = sum - arr[i];


        console.log("s --<", s)
        // checking for condition
        if (s.has(temp)) {
            console.log(
                "Pair with given sum "
                + sum + " is (" + arr[i]
                + ", " + temp + ")");
        }
        s.add(arr[i]);
    }
}

// Driver Code

let A = [1, 4, 45, 6, 10, 8];
let n = 16;
printpairs(A, n);

