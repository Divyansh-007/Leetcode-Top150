function maxProfit(prices: number[]): number {
    let minPrice:number = Number.MAX_SAFE_INTEGER
    let maxProfit:number = Number.MIN_SAFE_INTEGER

    for(let i = 0; i < prices.length; i++){
        let curr:number = prices[i]

        if(curr < minPrice){
            minPrice = curr;
        }

        maxProfit = Math.max(maxProfit,(curr - minPrice))
    }

    return maxProfit
};