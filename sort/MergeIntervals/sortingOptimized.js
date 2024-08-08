// https://www.geeksforgeeks.org/merging-intervals/

// To solve this problem optimally we have to first sort the intervals according to the starting time.
//  Once we have the sorted intervals, we can combine all intervals in a linear traversal. 
//  The idea is, in sorted array of intervals, if interval[i] doesn’t overlap with interval[i-1], 
//  then interval[i+1] cannot overlap with interval[i-1] because starting time of interval[i+1] 
//  must be greater than or equal to interval[i].

// A JavaScript program for merging overlapping intervals

// An interval has start time and end time
class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}

// Compares two intervals according to their starting time.
function compareInterval(i1, i2) {
    return (i1.start < i2.start);
}

// The main function that takes a set of intervals, merges
// overlapping intervals and prints the result
function mergeIntervals(arr) {
    // Test if the given set has at least one interval
    if (arr.length <= 0)
        return;

    // Create an empty stack of intervals
    let s = [];

    // sort the intervals in increasing order of start time
    arr.sort(compareInterval);

    // push the first interval to stack
    s.push(arr[0]);

    // Start from the next interval and merge if necessary
    for (let i = 1; i < arr.length; i++) {
        // get interval from stack top
        let top = s[s.length - 1];

        // if current interval is not overlapping with stack
        // top, push it to the stack
        if (top.end < arr[i].start)
            s.push(arr[i]);

        // Otherwise update the ending time of top if ending
        // of current interval is more
        else if (top.end < arr[i].end) {
            top.end = arr[i].end;
            s.pop();
            s.push(top);
        }
    }

    // Print contents of stack
    console.log("The Merged Intervals are: ");
    while (s.length > 0) {
        let t = s.pop();
        console.log("[" + t.start + "," + t.end + "] ");
    }
    return;
}

// Driver program
let arr = [new Interval(6, 8), new Interval(1, 9), new Interval(2, 4), new Interval(4, 7)];
mergeIntervals(arr);
