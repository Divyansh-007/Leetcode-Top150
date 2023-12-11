class Solution {
    public int charToInt(char ch){
        return ch == '1' ? 1 : 0;
    }

    public String addBinary(String a, String b) {
        int n = a.length();
        int m = b.length();
        int carry = 0;

        int i = n - 1;
        int j = m - 1;

        String ans = "";

        while(i >= 0 && j >= 0){
            int sum = charToInt(a.charAt(i)) + charToInt(b.charAt(j)) + carry;

            System.out.println("1->" + sum);
            if(sum < 2){
                carry = 0;
                ans += sum;
            }else if(sum == 2){
                sum = 0;
                carry = 1;
                ans += sum;
            }else if(sum == 3){
                sum = 1;
                carry = 1;
                ans += sum;
            }

            i--;
            j--;
        }

        while(i >= 0){
            int sum = charToInt(a.charAt(i)) + carry;

            if(sum < 2){
                carry = 0;
                ans += sum;
            }else if(sum == 2){
                sum = 0;
                carry = 1;
                ans += sum;
            }else if(sum == 3){
                sum = 1;
                carry = 1;
                ans += sum;
            }

            i--;
        }

        while(j >= 0){
            int sum = charToInt(b.charAt(j)) + carry;

            if(sum < 2){
                carry = 0;
                ans += sum;
            }else if(sum == 2){
                sum = 0;
                carry = 1;
                ans += sum;
            }else if(sum == 3){
                sum = 1;
                carry = 1;
                ans += sum;
            }

            j--;
        }

        if(carry > 0){
            ans += carry;
        }

        String result = "";

        for(int k = ans.length() - 1; k >= 0; k--){
            result += ans.charAt(k);
        }

        return result;
    }
}