class Solution {
    public int sumOfSquares(int n){
        int ans = 0;

        while(n > 0){
            int rem = n % 10;
            ans += rem * rem;
            n /= 10;
        }

        return ans;
    }

    
    public boolean isHappy(int n) {
        HashMap<Integer,Boolean> map = new HashMap<>();
        
        while(sumOfSquares(n) != 1){
            if(map.containsKey(n)){
                return false;
            }else{
                map.put(n,true);
                n = sumOfSquares(n);
                continue;
            }
        }



        return true;    
    }
}