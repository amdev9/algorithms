// JavaScript implementation of the above approach

function search(arr, low, high, key) {
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] === key) {
            // if we have found our target element
            // return the index of target element
            return mid;
        }

        if (arr[mid] === arr[low] && arr[mid] === arr[high]) {
            // It may happen in case of duplicates
            low++;
            high--;
            continue;
        }

        if (arr[low] <= arr[mid]) {
            // This means array is sorted from index low to
            // mid We will check that if target element lies
            // in left half or not

            if (key >= arr[low] && key < arr[mid]) {
                high = mid - 1;
            } else {
                // This means that our target lies in other
                // half of array So we shift low to mid+1 to
                // search in right half
                low = mid + 1;
            }
        } else {
            // This means array is sorted between mid and
            // high index

            // This will check our target element is
            // in right half or not
            if (key <= arr[high] && key > arr[mid]) {
                low = mid + 1;
            } else {
                // Means our target is in left half
                high = mid - 1;
            }
        }
    }

    // If target element is not present

    return -1;
}

// Driver code
let arr = [3, 3, 1, 2, 3, 3];
let n = arr.length;

let key = 3;
console.log(search(arr, 0, n - 1, key));
