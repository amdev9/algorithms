// https://www.geeksforgeeks.org/stock-buy-sell/

// Using Recursion – O(2^N) Time and O(1) Space:

// def max_profit(prices, i, can_sell):
//     # If we reach the end of all days, return 0
//     if i == len(prices):
//         return 0

//     # If we already have a stock, we can either sell the
//     # stock on ith day or move to the next day
//     if can_sell:
//         sell = prices[i] + max_profit(prices, i + 1, False)
//         not_sell = max_profit(prices, i + 1, True)
//         return max(sell, not_sell)
//     # If we don't have a stock, we can either buy the stock
//     # on ith day or move to the next day
//     else:
//         buy = -prices[i] + max_profit(prices, i + 1, True)
//         not_buy = max_profit(prices, i + 1, False)
//         return max(buy, not_buy)


// prices = [100, 180, 260, 310, 40, 535, 695]
// print(max_profit(prices, 0, False))

