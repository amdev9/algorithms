// https://www.geeksforgeeks.org/searching-algorithms-for-a-2d-arrays-matrix/

// Binary Search on sorted 2D array
function findAns(arr, target) {
    var row = 0;
    var col = arr[row].length - 1;
    while (row < arr.length && col >= 0) {
        if (arr[row][col] == target) {
            return [row, col];
        }

        // Target lies in further row
        if (arr[row][col] < target) {
            row++;
        }

        // Target lies in previous column
        else {
            col--;
        }
    }
    return [-1, -1];
}

// Driver Code
// Binary search in sorted matrix
var arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
var ans = findAns(arr, 12);
document.write("Element found at index: "
    + (ans));

// This code is contributed by shikhasingrajput 
