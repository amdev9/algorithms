function binarySearch(A, low, high, searchKey) {

    while (low <= high) {
        let m = low + (high - low) / 2;

        // Check if searchKey is present at mid
        if (A[m] == searchKey)
            return true;

        // If searchKey greater, ignore left half
        if (A[m] < searchKey)
            low = m + 1;

        // If searchKey is smaller, ignore right half
        else
            high = m - 1;
    }

    // if we reach here, then element was
    // not present
    return false;
}

function checkTwoSum(A, arr_size, sum) {

    /* Sort the elements */
    A.sort();

    // Traversing all element in an array search for
    // searchKey
    for (let i = 0; i < arr_size - 1; i++) {

        let searchKey = sum - A[i];
        // calling binarySearch function
        if (binarySearch(A, i + 1, arr_size - 1, searchKey) == true) {
            return true;
        }
    }
    return false;
}

/* Driver program to test above function */
let A = [1, 4, 45, 6, 10, -8];
let n = 14;
let arr_size = 6;

// Function calling
if (checkTwoSum(A, arr_size, n))
    console.log("Yes");
else
    console.log("No");

// This code is contributed by garg28harsh.