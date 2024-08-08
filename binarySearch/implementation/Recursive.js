// JavaScript program to implement recursive Binary Search

// A recursive binary search function. It returns
// location of x in given array arr[low..high] is present,
// otherwise -1
function binarySearch(arr, low, high, x) {
    if (high >= low) {
        let mid = low + Math.floor((high - low) / 2);

        // If the element is present at the middle
        // itself
        if (arr[mid] == x)
            return mid;

        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (arr[mid] > x)
            return binarySearch(arr, low, mid - 1, x);

        // Else the element can only be present
        // in right subarray
        return binarySearch(arr, mid + 1, high, x);
    }

    // We reach here when element is not
    // present in array
    return -1;
}

let arr = [2, 3, 4, 10, 40];
let x = 10;
let n = arr.length
let result = binarySearch(arr, 0, n - 1, x);
(result == -1) ? console.log("Element is not present in array")
    : console.log("Element is present at index " + result);
