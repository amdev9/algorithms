// JavaScript program for the above approach

// Function to calculate the max profit
function maxProfit(idx, prices, canSell) {
    // We have reached the end of the array
    if (idx === prices.length) {
        return 0;
    }

    if (canSell) {
        // We can only sell the stock
        return Math.max(prices[idx], maxProfit(idx + 1, prices, canSell));
    } else {
        // We can only buy the stock
        return Math.max(
            -prices[idx] + maxProfit(idx + 1, prices, true),
            maxProfit(idx + 1, prices, canSell)
        );
    }
}

// Driver code
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(0, prices, false)); // Output the max profit

// This code is contributed by Susobhan Akhuli
