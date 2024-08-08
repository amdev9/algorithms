

import java.io.*;
import java.util.Arrays;

class GFG {
    public static int maxProfit(int[] prices, int i,
        boolean canSell, int[][] dp) {
        // If we reach the end of all days, return 0
        if (i == prices.length) {
            return 0;
        }

        // Convert boolean canSell to an integer index for
        // dp array
        int canSellIndex = canSell ? 1 : 0;

        // Check if the answer has already been
        // precalculated
        if (dp[i][canSellIndex] != -1) {
            return dp[i][canSellIndex];
        }

        // If we already have a stock, we can either sell
        // the stock on ith day or move to the next day
        if (canSell) {
            int sell
                = prices[i]
                + maxProfit(prices, i + 1, false, dp);
            int notSell
                = maxProfit(prices, i + 1, true, dp);
            dp[i][canSellIndex] = Math.max(sell, notSell);
        }
        // If we don't have a stock, we can either buy the
        // stock on ith day or move to the next day
        else {
            int buy = -prices[i]
                + maxProfit(prices, i + 1, true, dp);
            int notBuy
                = maxProfit(prices, i + 1, false, dp);
            dp[i][canSellIndex] = Math.max(buy, notBuy);
        }

        return dp[i][canSellIndex];
    }
    public static void main(String[] args) {
        // Sample Input
        int[] prices = { 100, 180, 260, 310, 40, 535, 695 };

        int n = prices.length;
        int[][] dp = new int[n][2];

        // Initialize dp array with -1
        for (int[] row : dp) {
            Arrays.fill(row, -1);
        }
        System.out.println(maxProfit(prices, 0, false, dp));
    }
}
