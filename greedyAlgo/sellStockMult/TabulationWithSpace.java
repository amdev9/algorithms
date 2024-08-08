/*package whatever //do not write package name here */

import java.io.*;

class GFG {
    public static int maxProfit(int n, int[] prices)
    {
        int[] currDay = new int[2];
        int[] nextDay = new int[2];

        // Base Case
        nextDay[0] = nextDay[1] = 0;

        for (int i = n - 1; i >= 0; i--) {
            // Can Buy
            currDay[0] = Math.max(nextDay[0],
                                  -prices[i] + nextDay[1]);
            // Can Sell
            currDay[1] = Math.max(nextDay[1],
                                  prices[i] + nextDay[0]);

            nextDay = currDay.clone();
        }
        return nextDay[0];
    }

    public static void main(String[] args)
    {
        // Sample Input
        int[] prices = { 100, 180, 260, 310, 40, 535, 695 };

        int n = prices.length;
        System.out.println(maxProfit(n, prices));
    }
}
