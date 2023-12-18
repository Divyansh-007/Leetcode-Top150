class Solution {
    public void reverse(int[] arr, int si, int ei){
        while(si <= ei){
            int temp = arr[si];
            arr[si] = arr[ei];
            arr[ei] = temp;
            si++;
            ei--;
        }
    }

    public void rotate(int[] nums, int k) {
        if(k > nums.length){
            k = k % nums.length;
        }
        reverse(nums,0,nums.length - 1);
        reverse(nums,0,k - 1);
        reverse(nums,k,nums.length - 1);
    }
}