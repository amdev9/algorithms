// JavaScript Program to find the maximum for 
// each and every contiguous subarray of size k.

// Method to find the maximum for each 
// and every contiguous subarray of size k.
function printKMax(arr, n, k) {
    let j, max;

    for (let i = 0; i <= n - k; i++) {
        max = arr[i];

        for (j = 1; j < k; j++) {
            if (arr[i + j] > max)
                max = arr[i + j];
        }
        console.log(max + " ");
    }
}

// Driver code

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = arr.length;
let k = 3;
printKMax(arr, n, k);

// This code contributed by gauravrajput1 
