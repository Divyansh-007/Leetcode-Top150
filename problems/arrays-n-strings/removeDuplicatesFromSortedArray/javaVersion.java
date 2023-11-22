class Solution {
    public int removeDuplicates(int[] nums) {
        int k = 0;
        int prev = nums[0];
        for(int i = 1; i < nums.length; i++){
            if(nums[i] == prev){
                continue;
            }else{
                nums[k] = prev;
                prev = nums[i];
                k++;
            }
        }

        nums[k] = prev;
        k++;
        return k;
    }
}