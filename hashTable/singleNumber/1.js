// Traverse all elements and put them in a hash table. Element is used as key and the count of occurrences is used as the value in the hash table. 
// Traverse the array again and print the element with count 1 in the hash table. 

function singleNumberWithHash(nums) {
    let hash = {};
    nums.forEach((num) => {
        if (hash[num]) {
            delete hash[num];
        }
        else {
            hash[num] = 1;
        }
    });
    return Object.keys(hash)[0];
}

// https://dev.to/alisabaj/finding-the-only-single-number-in-an-array-pce

