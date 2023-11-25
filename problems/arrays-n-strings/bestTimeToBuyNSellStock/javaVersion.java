class Solution {
    public int maxProfit(int[] prices) {
        int minPrice = Integer.MAX_VALUE;
        int maxProfit = Integer.MIN_VALUE;

        for(int i = 0; i < prices.length; i++){
            int curr = prices[i];
            if(curr < minPrice){
                minPrice = curr;
            }
            maxProfit = Math.max(maxProfit,(curr - minPrice));
                
        }

        return maxProfit;
    }
}