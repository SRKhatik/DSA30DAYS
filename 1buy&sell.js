// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function maxProfit(price){
    let minPrice = Number.MAX_VALUE;
    let profit = 0;
    for(let i=0;i<price.length;i++){
        minPrice = Math.min(minPrice,price[i])
        profit = Math.max(profit,price[i]-minPrice)
    }
    return profit;
}
let price = [7,1,5,3,6,4]
const result = maxProfit(price)
console.log(result) //5  time complexity o(n)