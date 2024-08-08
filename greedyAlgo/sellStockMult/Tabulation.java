/*package whatever //do not write package name here */

import java.io.*;

class GFG {
    public static int maxProfit(int n, int[] prices)
    {
        int[][] dp = new int[n + 1][2];

        // Base Case
        dp[n][0] = dp[n][1] = 0;

        for (int i = n - 1; i >= 0; i--) {
            dp[i][0] = Math.max(dp[i + 1][0],
                                -prices[i] + dp[i + 1][1]);
            dp[i][1] = Math.max(dp[i + 1][1],
                                prices[i] + dp[i + 1][0]);
        }
        return dp[0][0];
    }

    public static void main(String[] args)
    {
        // Sample Input
        int[] prices = { 100, 180, 260, 310, 40, 535, 695 };

        int n = prices.length;
        System.out.println(maxProfit(n, prices));
    }
}
