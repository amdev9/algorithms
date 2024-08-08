// https://github.com/doocs/leetcode/blob/main/solution/0200-0299/0242.Valid%20Anagram/README_EN.md#solution-1-counting

// We first determine whether the length of the two strings is equal. If they are not equal, the characters in the two strings must be different, so return false.

// Otherwise, we use a hash table or an array of length 
//  to record the number of times each character appears in the string 
// , and then traverse the other string 
// . Each time we traverse a character, we subtract the number of times the corresponding character appears in the hash table by one.
//  If the number of times after subtraction is less than 
// , the number of times the character appears in the two strings is different, return false.
//  If after traversing the two strings, all the character counts in the hash table are 
// , it means that the characters in the two strings appear the same number of times, return true.

// The time complexity is O(n)
// , the space complexity is O(C)
// , where 
// n is the length of the string; and 
// C is the size of the character set, which is 
// C=26 in this problem.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const cnt = new Array(26).fill(0);
    for (let i = 0; i < s.length; ++i) {


        console.log(s.charCodeAt(i), 'a'.charCodeAt(0))
        ++cnt[s.charCodeAt(i) - 'a'.charCodeAt(0)];
        --cnt[t.charCodeAt(i) - 'a'.charCodeAt(0)];
    }
    return cnt.every(x => x === 0);
};


// console.log(isAnagram("test", "tstae"))