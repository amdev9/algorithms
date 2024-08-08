
// JavaScript program to remove invalid parenthesis

// method checks if character is parenthesis(open
// or closed)
function isParenthesis(c) {
    return ((c == '(') || (c == ')'));
}

// method returns true if string contains valid
// parenthesis
function isValidString(str) {
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(')
            cnt++;
        else if (str[i] == ')')
            cnt--;
        if (cnt < 0) {
            console.log("false str", str, cnt)
            return false;
        }
    }
    return (cnt == 0);
}

// method to remove invalid parenthesis
function removeInvalidParenthesis(str) {
    if (str.length == 0)
        return;

    // visit set to ignore already visited string
    let visit = new Set();

    // queue to maintain BFS
    let q = [];
    let temp;
    let level = false;

    // pushing given string as 
    // starting node into queue
    q.push(str);
    visit.add(str);
    while (q.length != 0) {
        str = q.shift();
        if (isValidString(str)) {
            console.log(str);

            // If answer is found, make level true
            // so that valid string of only that level
            // are processed.
            level = true;
        }
        if (level)
            continue;
        for (let i = 0; i < str.length; i++) {
            if (!isParenthesis(str[i]))
                continue;

            // Removing parenthesis from str and
            // pushing into queue,if not visited already
            temp = str.substring(0, i) + str.substring(i + 1);
            if (!visit.has(temp)) {
                q.push(temp);
                visit.add(temp);
            }
        }
        console.log("q", q)
    }
}

// Driver Code
let expression = "()())()";
removeInvalidParenthesis(expression);

expression = "()v)";
removeInvalidParenthesis(expression);

// This code is contributed by rag2127


