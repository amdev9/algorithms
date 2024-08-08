function maxProfit(prices) {
    const n = prices.length;

    // 2D DP array to store max profit with 0 and 1 stocks
    const dp = new Array(n).fill(null).map(() => [0, 0]);

    dp[0][0] = -prices[0];
    dp[0][1] = 0;

    // Loop through prices to calculate max profit at each day
    for (let i = 1; i < n; i++) {
        // choice 1: Buy the stock at i, in which case the profit we get is
        // the maximum profit we could have made till i-1 minus the price at i.


        dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);

        // choice 2: Sell the stock at i, in which case the profit we get is
        // the maximum profit we could have made till i-1 by buying the stock
        // earlier plus the price at i.
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);

    }

    // Return the maximum profit calculated from the last day
    return Math.max(dp[n - 1][0], dp[n - 1][1]);
}

// Given prices
const prices = [7, 1, 5, 3, 6, 4];

// Function Call
const ans = maxProfit(prices);

// Print answer
console.log(ans);
