// https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/


// In a regular binary search, we discard half of the array based on the comparison with the middle element.
//  In a rotated sorted array, we use a modified version of the binary search algorithm and need additional checks to determine which half to discard.

// Below is the idea of modified binary search:

// When dividing the array into two halves, it is sure that at least one of them will be sorted.
// Based on the sorted half, we can decide whether to continue the search in that half or the other half.



function search(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);

        // Case 1: If the middle element is the target
        if (nums[mid] === target) {
            return mid;
        }

        // Case 2: Left half is sorted
        if (nums[mid] >= nums[left]) {
            // If the target is in the sorted left half
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            // Case 3: Right half is sorted
        } else {
            // If the target is in the sorted right half
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    // Target not found
    return -1;
}

// Example usage
const arr1 = [4, 5, 6, 7, 0, 1, 2];
const target1 = 0;
console.log(search(arr1, target1));  // Output: 4

const arr2 = [4, 5, 6, 7, 0, 1, 2];
const target2 = 3;
console.log(search(arr2, target2));  // Output: -1

// Time Complexity: O(log(n))
// Auxiliary Space: O(1)

