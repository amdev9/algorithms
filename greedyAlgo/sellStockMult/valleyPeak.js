// Valley Peak Approach – O(N) Time and O(1) Space:


// javascript program for the above approach
function maxProfit(prices, size) {

    // maxProfit adds up the difference between
    // adjacent elements if they are in increasing order
    var maxProfit = 0;

    // The loop starts from 1
    // as its comparing with the previous
    for (i = 1; i < size; i++)
        if (prices[i] > prices[i - 1])
            maxProfit += prices[i] - prices[i - 1];
    return maxProfit;
}

// Driver code

// stock prices on consecutive days
var price = [100, 180, 260, 310, 40, 535, 695];
var n = price.length;

// function call
console.log(maxProfit(price, n));

// This code is contributed by umadevi9616 


