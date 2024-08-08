// Forward declaration of the guess API.
// @param {number} num - Your guess
// @return -1 if num is lower than the guess number
// @return 1 if num is higher than the guess number
// @return 0 if num is the guess number


/**
 * Finds the number guessed by the guess API within the range [1, n].
 * 
 * @param {number} n - The maximum range within which the guessed number falls.
 * @return {number} - The correct guessed number.
 */
function guessNumber(n) {
    // Initialize the search range
    let left = 1;
    let right = n;

    // Use binary search to find the guessed number
    while (left < right) {
        // Calculate the midpoint to minimize the search range
        // Using right shift by 1 to ensure no overflow happens
        const mid = left + Math.floor((right - left) / 2)

        // Guess the middle of the range and reduce the range based on the response
        const result = guess(mid);
        if (result <= 0) {
            // If the guessed number is less than or equal to mid, narrow the range to the left half
            right = mid;
        } else {
            // If the guessed number is greater than mid, narrow the range to the right half
            left = mid + 1;
        }
    }
    // At the end of the loop, left should be equal to the guessed number
    return left;
}