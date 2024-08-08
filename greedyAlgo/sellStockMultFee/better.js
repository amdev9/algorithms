// JavaScript program to implement the approach
function max_profit(prices, transaction_fee = 0) {
    let n = prices.length
    let start = 0
    let end = 1
    let profit = 0
    max_profit_till_now = -1000000
    let diff = 0
    while (start < n - 1 && end < n) {
        while (start < n - 1 && prices[start] > prices[start + 1])
            start += 1
        end = start + 1
        while (end < n - 1 && prices[end] < prices[end + 1]) {
            end += 1
            if (end == n)
                continue
        }
        let cur_profit = prices[end] - prices[start] - transaction_fee
        if (cur_profit > 0)
            profit += cur_profit
        if (max_profit_till_now < cur_profit) {
            max_profit_till_now = cur_profit
            diff = end - start
        }
        start = end + 1;
    }
    return [profit, diff]
}

console.log(max_profit([6, 1, 7, 2, 8, 4], 2))

// This code is contributed by phasing17
