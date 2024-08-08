// https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/stack

// This method involves using a stack data structure to keep track of parentheses and ensuring they are properly closed.

// Begin by initializing a stack.
// Iterate, through the given string.
// If an open parenthesis is encountered, push it onto the stack.
// If a closing parenthesis is encountered check if it matches the element of the stack.
// If they match, pop the element from the stack; otherwise conclude that the parentheses are not balanced and return false.
// After iterating through all characters in the string if the stack is empty it means all parentheses have been correctly closed so return true.


function isValidParentheses(str) {
    const stack = [];
    const pairs = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    for (let char of str) {
        if (pairs[char]) {
            stack.push(char);
        } else if (
            char === ")" ||
            char === "]" ||
            char === "}"
        ) {
            if (
                pairs[stack.pop()] !==
                char
            ) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

const inputString = "({()})";
console.log(
    `Is it a valid Paranthesis ? :
${isValidParentheses(inputString)}`
);

