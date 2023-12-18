class Solution {
    public int maxProfit(int[] prices) {
        int minPrice = prices[0];
        int maxProfit = 0;

        for(int i = 1; i < prices.length; i++){
            int curr = prices[i];
            if(curr < minPrice){
                minPrice = curr;
            }else{
                maxProfit += curr - minPrice;
                minPrice = curr;
            }
        }

        return maxProfit;
    }
}