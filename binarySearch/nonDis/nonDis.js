
// Javascript implementation of the approach 

// Function to return the index of the
// key in arr[l..h] if the key is present
// otherwise return -1
function search(arr, l, h, key) {
    if (l > h)
        return -1;

    let mid = parseInt((l + h) / 2, 10);
    if (arr[mid] == key)
        return mid;

    // The tricky case, just update left and right
    if ((arr[l] == arr[mid])
        && (arr[h] == arr[mid])) {
        ++l;
        --h;
        return search(arr, l, h, key)
    }

    // If arr[l...mid] is sorted
    if (arr[l] <= arr[mid]) {

        // As this subarray is sorted, we can quickly
        // check if key lies in any of the halves
        if (key >= arr[l] && key <= arr[mid])
            return search(arr, l, mid - 1, key);

        // If key does not lie in the first half
        // subarray then divide the other half
        // into two subarrays such that we can
        // quickly check if key lies in the other half
        return search(arr, mid + 1, h, key);
    }

    // If arr[l..mid] first subarray is not sorted
    // then arr[mid... h] must be sorted subarray
    if (key >= arr[mid] && key <= arr[h])
        return search(arr, mid + 1, h, key);

    return search(arr, l, mid - 1, key);
}

let arr = [3, 3, 1, 2, 3, 3];
let n = arr.length;
let key = 3;

console.log(search(arr, 0, n - 1, key));

