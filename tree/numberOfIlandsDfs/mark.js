// JavaScript program to count the number of islands in a given binary matrix

// valid row and column checker
function check(i, j, n, m) {
    return i >= 0 && j >= 0 && i < n && j < m;
}

// marking (connecting all possible parts of single island)
function mark_component(v, vis, i, j, n, m) {
    if (!check(i, j, n, m))
        return;
    vis[i][j] = true;
    if (v[i][j] == 1) {
        v[i][j] = 0;
        mark_component(v, vis, i + 1, j, n, m);
        mark_component(v, vis, i - 1, j, n, m);
        mark_component(v, vis, i, j + 1, n, m);
        mark_component(v, vis, i, j - 1, n, m);
        mark_component(v, vis, i + 1, j + 1, n, m);
        mark_component(v, vis, i - 1, j - 1, n, m);
        mark_component(v, vis, i + 1, j - 1, n, m);
        mark_component(v, vis, i - 1, j + 1, n, m);
    }
}

function countIslands(v) {
    let n = v.length;
    let m = v[0].length;
    let cnt = 0;
    // visit vector
    let vis = new Array(n).fill().map(() => new Array(m).fill(false));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!vis[i][j] && v[i][j] == 1) {
                ++cnt;
                mark_component(v, vis, i, j, n, m);
            }
        }
    }
    console.log("The number of islands in the matrix are: ");
    console.log(cnt);
}

// Sample matrix input
let v = [[1, 1, 0, 0, 0],
[0, 1, 0, 0, 1],
[1, 0, 0, 1, 1],
[0, 0, 0, 0, 0],
[1, 0, 1, 0, 1]];

countIslands(v);
// This code is contributed by Shivam Tiwari
