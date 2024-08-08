// HashMap with O(NM) Solution
// In the previous approach, we were sorting every string in order to maintain a similar key, 
// but that cost extra time in this approach will take the advantage of another hashmap to maintain the frequency
//  of the characters which will generate the same hash function for different string having same frequency of characters.
// Here, we will take HashMap<HashMap, ArrayList>, the inner hashmap will count the frequency of the characters of
//  each string and the outer HashMap will check whether that hashmap is present or not if present then it will
//  add that string to the corresponding list. 

// Javascript program for the above approach

let user_input = ["cat", "dog", "tac", "edoc", "god", "tacact",
    "act", "code", "deno", "node", "ocde", "done", "catcat"];

function solve(words) {
    // create a new map if the key is not found in the dictionary
    let m = new Map();

    // loop over all the words
    for (let word of words) {
        let charCount = new Map();
        for (let char of word) {
            charCount.set(char, (charCount.get(char) || 0) + 1);
        }
        let key = JSON.stringify([...charCount.entries()].sort());
        let values = m.get(key) || [];
        values.push(word);
        m.set(key, values);
    }
    return [...m.values()];
}

console.log(solve(user_input));

// This code is contributed by codebraxnzt

// Time Complexity: Let there be N-words and each word has a maximum of M characters. The upper bound is O(NM). 
// Auxiliary Space : Let there be N-words and each word has maximum M characters, therefore max. storage space 
// for each word with at max. M characters will be O(M), therefore for max N-words, it will be O(N*M).
//  Therefore, the upper bound is O(NM).