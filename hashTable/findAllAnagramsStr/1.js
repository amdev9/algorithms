// https://www.geeksforgeeks.org/anagram-substring-search-search-permutations/


// JavaScript program to search all anagrams
// of a pattern in a text 
const MAX = 256;

// This function returns true if 
// contents of arr1[] and arr2[] 
// are same, otherwise false. 
function compare(arr1, arr2) {
    for (var i = 0; i < MAX; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// This function search for all 
// permutations of pat[] in txt[] 
function search(pat, txt) {
    var M = pat.length;
    var N = txt.length;

    // countP[]: Store count of all 
    // characters of pattern 
    // countTW[]: Store count of current 
    // window of text 
    var countP = new Array(MAX).fill(0);
    var countTW = new Array(MAX).fill(0);
    for (var i = 0; i < M; i++) {
        countP[pat[i].charCodeAt(0)]++;
        countTW[txt[i].charCodeAt(0)]++;
    }

    // Traverse through remaining 
    // characters of pattern 
    for (var i = M; i < N; i++) {
        // Compare counts of current window
        // of text with counts of pattern[] 
        if (compare(countP, countTW)) {
            console.log("Found at Index " + (i - M) + "\n");
        }

        // Add current character to 
        // current window 
        countTW[txt[i].charCodeAt(0)]++;

        // Remove the first character of 
        // previous window 
        countTW[txt[i - M].charCodeAt(0)]--;
    }

    // Check for the last window in text 
    if (compare(countP, countTW)) {
        console.log("Found at Index " + (N - M) + "\n");
    }
}

// Driver Code 
var txt = "BACDGABCDA";
var pat = "ABCD";
search(pat, txt);

