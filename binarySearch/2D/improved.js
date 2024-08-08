// Binary Search on sorted 2D array

function findAns(arr, target) {
    let row = arr.length;
    let col = arr[0].length;
    let l = 0, h = row * col - 1;

    while (l <= h) {
        let mid = l + Math.floor((h - l) / 2);

        let tC = mid % col;
        let tR = Math.floor(mid / col);
        let val = arr[tR][tC];
        if (val == target)
            return [tR, tC];

        if (val < target)
            l = mid + 1;
        else
            h = mid - 1;
    }

    return [-1, -1];
}


// Binary search in sorted matrix
let arr = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12]];

let ans = findAns(arr, 12);

let print = "Element found at index: [";
for (let i = 0; i < ans.length; i++) {
    if (i == ans.length - 1)
        print += ans[i];
    else
        print += ans[i] + ", ";
}
print += "]";
console.log(print);

// This code is contributed by akashish__
