class Solution {
    public List<String> summaryRanges(int[] nums) {
        List<String> ans = new ArrayList<>();
                
        if(nums.length < 1){
            return ans;    
        }else if(nums.length <= 2){
            if(nums.length == 1){
                ans.add(nums[0] + "");
                return ans;
            }else{
                int n1 = nums[0];
                int n2 = nums[1];

                if(n2 - n1 == 1){
                    ans.add(n1 + "->" + n2);
                }else{
                    if(n1 == n2){
                        ans.add(n1 + "");
                    }else{
                        ans.add(n1 + "");
                        ans.add(n2 + "");
                    }
                }

                return ans;
            }
        }
        
        int prev = nums[0];
        int si = nums[0];
        int ei = -1;

        for(int i = 1; i < nums.length; i++){
            ei = nums[i];
            if(ei - prev == 1){
                prev = ei;
                continue;
            }else{
                if(si == prev){
                    ans.add(si + "");
                }else{
                    ans.add(si + "->" + prev);
                }
                
                si = ei;
                prev = ei;
                continue;
            }
        }

        if(si == prev){
            ans.add(si + "");
        }else{
            ans.add(si + "->" + prev);
        }
        

        return ans;

    }
}