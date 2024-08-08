// https://www.geeksforgeeks.org/container-with-most-water/

// Algorithm: 
// Keep two index, first = 0 and last = n - 1 and a
//  value max_area that stores the maximum area.
// Run a loop until first is less than the last.
// Update the max_area with maximum of max_area 
// and min(array[first], array[last]) * (last - first)
// if the value at array[first] is greater the array[last]
//  then update last as last – 1 else update first as first + 1
// Print the maximum area.



// Javascript code for Max
// Water Container
function maxArea(A, len) {
    let l = 0;
    let r = len - 1;
    let area = 0;

    while (l < r) {

        // Calculating the max area
        area = Math.max(area, Math.min(A[l],
            A[r]) * (r - l));

        if (A[l] < A[r])
            l += 1;
        else
            r -= 1;
    }
    return area;
}

// Driver code 
let a = [1, 5, 4, 3];
let b = [3, 1, 2, 4, 5];

let len1 = a.length;
console.log(maxArea(a, len1) + "</br>");

let len2 = b.length;
console.log(maxArea(b, len2));
