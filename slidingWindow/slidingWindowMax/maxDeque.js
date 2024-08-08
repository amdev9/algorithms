// https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/

// We have used array in javascript to implement methods of dequeue
// A Dequeue (Double ended queue) based 
// method for printing maximum element of
// all subarrays of size k
function printKMax(arr, n, k) {
    // creating string str to be printed at last
    let str = "";

    // Create a Double Ended Queue, 
    // Qi that will store indexes 
    // of array elements
    // The queue will store indexes 
    // of useful elements in every 
    // window and it will
    // maintain decreasing order of 
    // values from front to rear in Qi, i.e.,
    // arr[Qi.front[]] to arr[Qi.rear()] 
    // are sorted in decreasing order
    // std::deque<int> Qi(k);
    let Qi = [];

    /* Process first k (or first window) 
     elements of array */
    let i;
    for (i = 0; i < k; ++i) {

        // For every element, the previous
        // smaller elements are useless so
        // remove them from Qi
        while ((Qi.length != 0) && arr[i] >=
            arr[Qi[Qi.length - 1]])

            // Remove from rear
            Qi.pop();

        // Add new element at rear of queue
        Qi.push(i);
    }

    // Process rest of the elements, 
    // i.e., from arr[k] to arr[n-1]
    for (i; i < n; ++i) {

        // The element at the front of 
        // the queue is the largest element of
        // previous window, so print it
        str += arr[Qi[0]] + " ";
        // console.log(arr[Qi[0]] + " ") ;

        // Remove the elements which 
        // are out of this window
        while ((Qi.length != 0) && Qi[0] <= i - k)

            // Remove from front of queue
            Qi.shift();

        // Remove all elements 
        // smaller than the currently
        // being added element (remove 
        // useless elements)
        while ((Qi.length != 0) && arr[i] >= arr[Qi[Qi.length - 1]])
            Qi.pop();

        // Add current element at the rear of Qi
        Qi.push(i);
    }

    // Print the maximum element 
    // of last window
    str += arr[Qi[0]];
    console.log(str);
}

let arr = [12, 1, 78, 90, 57, 89, 56];
let n = arr.length;
let k = 3;
printKMax(arr, n, k);

// This code is contributed by akashish__
