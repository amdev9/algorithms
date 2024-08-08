// JavaScript program to find k numbers with most
// occurrences in the given array

// Function to print the k numbers with most occurrences
function print_N_mostFrequentNumber(arr, N, K) {

    // HashMap to store count of the elements
    var elementCount = new Map();

    for (let i = 0; i < N; i++) {
        if (elementCount.has(arr[i])) {
            var temp = elementCount.get(arr[i]);
            elementCount.set(arr[i], temp + 1);
        }
        else {
            elementCount.set(arr[i], 1);
        }
    }

    // Array to store the elements according
    // to their frequency
    var frequency = new Array(N + 1);

    for (let i = 0; i <= N; i++) {
        frequency[i] = new Array();
    }

    // Inserting elements in the frequency array
    for (const [key, value] of elementCount.entries()) {
        frequency[value].push(key);
    }

    let count = 0;
    console.log(K + " numbers with most occurrences are:" + "<br>");

    for (let i = N; i >= 0; i--) {
        for (var j = frequency[i].length - 1; j >= 0; j--) {
            count++;
            console.log(frequency[i][j] + " ");
        }
        // if K elements have been printed
        if (count == K) {
            return;
        }
    }
    return;
}

let arr = [3, 1, 4, 4, 5, 2, 6, 1];
let N = arr.length;
let K = 2;

// Function call
print_N_mostFrequentNumber(arr, N, K);

// This code is contributed by lokeshmvs21.
