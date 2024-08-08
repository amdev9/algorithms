
// Javascript code for Max
// Water Container

function maxArea(A, len) {
    let area = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            // Calculating the max area
            area = Math.max(area, Math.min(A[j], A[i]) * (j - i));
        }
    }
    return area;
}

let a = [1, 5, 4, 3];
let b = [3, 1, 2, 4, 5];

let len1 = a.length;
console.log(maxArea(a, len1) + "</br>");

let len2 = b.length;
console.log(maxArea(b, len2));


