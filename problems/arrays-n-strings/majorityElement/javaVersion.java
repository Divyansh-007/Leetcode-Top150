class Solution {
    public int majorityElement(int[] nums) {
        HashMap<Integer,Integer> freq = new HashMap<>();

        for(int i = 0; i < nums.length; i++){
            int curr = nums[i];
            if(freq.containsKey(curr)){
                freq.put(curr,freq.get(curr) + 1);
                continue;
            }

            freq.put(curr,1);
        }

        int ans = -1;
        for(int key : freq.keySet()){
            if(freq.get(key) > (nums.length / 2)){
                ans = key;
            }
        }

        return ans;
    }
}