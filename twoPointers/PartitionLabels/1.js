// https://www.geeksforgeeks.org/maximized-partitions-of-a-string-such-that-each-character-of-the-string-appears-in-one-substring/

// javascript program for the
// above approach

// Function to print all the substrings
function print_substring(s) {
    let n = s.length;

    // Stores the substrings
    let str = "";

    // Stores last index of
    // characters of string s
    let ans = [];

    if (n == 0) {
        console.log("-1");
        return;
    }

    // Find the last position of
    // each character in the string
    let last_pos = Array(26).fill(-1);

    for (let i = n - 1; i >= 0; --i) {

        // Update the last index
        if (last_pos[s[i].charCodeAt() - 'a'.charCodeAt()] == -1) {
            last_pos[s[i].charCodeAt() - 'a'.charCodeAt()] = i;
        }
    }

    let minp = -1;

    // Iterate the given string
    for (let i = 0; i < n; ++i) {

        // Get the last index of s[i]
        let lp = last_pos[s[i].charCodeAt() - 'a'.charCodeAt()];

        // Extend the current partition
        // characters last pos
        minp = Math.max(minp, lp);

        // If the current pos of
        // character equals the min pos
        // then the end of partition
        if (i == minp) {

            // Add the respective character first
            str += s[i];

            // Store the partition's
            // len and reset variables
            console.log(str + ' ');

            // Update the minp and str
            minp = -1;
            str = "";
        }
        else {
            str += s[i];
        }
    }
}


// Driver Code

// Input string
let S = "ababcbacadefegdehijhklij";

// Function call
print_substring(S);
