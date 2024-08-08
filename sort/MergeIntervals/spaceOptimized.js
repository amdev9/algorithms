// The above solution requires O(n) extra space for the stack. 
// We can avoid the use of extra space by doing merge operations in place.
//  Below are detailed steps. 

// A JavaScript program for merging overlapping intervals

// An interval has start time and end time
class Interval {
    constructor(s, e) {
        this.s = s;
        this.e = e;
    }
}

// Function used in sort
function mycomp(a, b) {
    return a.s < b.s;
}

// The main function that takes a set of intervals, merges
// overlapping intervals and prints the result
function mergeIntervals(arr) {
    // Sort Intervals in increasing order of
    // start time
    arr.sort(mycomp);

    let index = 0; // Stores index of last element
    // in output array (modified arr[])

    // Traverse all input Intervals
    for (let i = 1; i < arr.length; i++) {
        // If this is not first Interval and overlaps
        // with the previous one
        if (arr[index].e >= arr[i].s) {
            // Merge previous and current Intervals
            arr[index].e = Math.max(arr[index].e, arr[i].e);
        }
        else {
            index++;
            arr[index] = arr[i];
        }
    }

    // Now arr[0..index-1] stores the merged Intervals
    console.log("\n The Merged Intervals are: ");
    for (let i = 0; i <= index; i++)
        console.log("[" + arr[i].s + ", " + arr[i].e + "] ");
}

// Driver program
let arr = [new Interval(6, 8), new Interval(1, 9), new Interval(2, 4), new Interval(4, 7)];
mergeIntervals(arr);
