class Solution {
    public int[] plusOne(int[] digits) {
        int n = digits.length;

        if(digits[n - 1] < 9){
            digits[n - 1]++;
            return digits;
        }else{
            ArrayList<Integer> reversedDigits = new ArrayList<>();
             reversedDigits.add(0);
             int carry = 1;

            for(int i = n - 2; i >= 0; i--){
                int sum = digits[i] + carry;

                if(sum > 9){
                    reversedDigits.add(sum % 10);
                    carry = sum / 10;
                }else{
                    reversedDigits.add(sum);
                    carry = 0;
                }
            }

            if(carry > 0){
                reversedDigits.add(carry);
            }

            System.out.println(reversedDigits);
            int[] result = new int[reversedDigits.size()];
            int k = 0;

            for(int i = reversedDigits.size() - 1; i >= 0; i--){
                result[k] = reversedDigits.get(i);
                k++;
            }

            return result;
        }
    }
}