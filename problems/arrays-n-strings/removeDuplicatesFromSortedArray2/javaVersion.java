class Solution {
    public int removeDuplicates(int[] nums) {
        int prev = nums[0];
        int count = 1;
        int k = 1;

        for(int i = 1; i < nums.length; i++){
            if(nums[i] == prev){
                if(count == 2){
                    continue;
                }else if(count < 3){
                    nums[k] = nums[i];
                    k++;
                    count++;
                }
                
            }else{
                prev = nums[i];
                nums[k] = nums[i];
                k++;
                count = 1;
            }
        }

        return k;
    }
}