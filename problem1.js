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