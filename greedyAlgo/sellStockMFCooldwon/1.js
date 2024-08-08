// https://www.geeksforgeeks.org/maximizing-stock-profit-with-cooldown/


// We need to maintain three states for each day. The first stage will be maxed profit we can make 
// if we have one stock yet to be sold. The second stage will be the max profit we can make if we have
//  no stock left to be sold. The third state is the cooldown state. It is similar to the second state,
//  but we have completed the cooldown of 1 day after selling the stock. Each state can be maintained using a DP vector.


// Javascript program to maximize profit by buying and 
// selling stock with cooldown
function maximumProfit(v) {
    var n = v.length;
    var dp = new Array(n + 1);
    for (var i = 0; i < n + 1; i++) {
        dp[i] = new Array(3);
        for (var j = 0; j < 3; j++) {
            dp[i][j] = 0;
        }
    }
    dp[0][0] = -v[0];


    for (var i = 1; i <= n; i++) {
        // Maximum of buy state profit till the previous day or
        // buying a new stock with the cooldown state of the previous day
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - v[i - 1]);

        // Maximum of sold state profit till the previous day or
        // selling the stock on the current day with the buy state 
        // of the previous day
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + v[i - 1]);

        // Sold state of the previous day
        dp[i][2] = dp[i - 1][1];
    }
    // Return the sold state profit of the final day
    return dp[n][1];
}

var v = [1, 2, 3, 0, 2];
console.log(maximumProfit(v));

// This code is contributed by Tapesh(tapeshdua420)

