function printNMostFrequentNumber(nums, k, out) {
    // Count the occurrences of each number
    let counts = new Map();
    for (let num of nums) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }

    // Get the k numbers with the highest occurrences
    let mostFrequent = Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).slice(0, k);

    // Extract the numbers from the most frequent pairs
    let numbers = mostFrequent.map(([num, _]) => num);

    // Store the numbers in the output array
    for (let i = 0; i < numbers.length; i++) {
        out[i] = numbers[i];
    }

    return out;
}

// Driver's code
let arr = [3, 1, 4, 4, 5, 2, 6, 1];
let K = 2;

// Function call
let ans = new Array(K).fill(0);
printNMostFrequentNumber(arr, K, ans);
console.log(`${K} numbers with most occurrences are:`);
console.log(ans.reverse());
