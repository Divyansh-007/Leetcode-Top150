class Solution {
    public int reverse(int n){
        int ans = 0;

        while(n > 0){
            int rem = n % 10;
            ans = ans * 10 + rem;
            n = n / 10;
        }

        return ans;
    }

    public boolean isPalindrome(int x) {
        if(x < 0){
            return false;
        }

        return x == reverse(x);
    }
}