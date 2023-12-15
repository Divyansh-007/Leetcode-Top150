/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let sum = 0;
  let small = prices[0];
  for(let i = 1 ; i < prices.length; i++){
      if(small > prices[i]){
          small = prices[i];
      }else{
          if(prices[i] > small){
              sum += prices[i] - small;
              small = prices[i];
          }
      }
  }

  return sum;
};