class Solution {
    public boolean helper(int [] arr, int i, int n,HashMap<Integer,Boolean> visited){
        if(n == 1){
            return true;
        }else if(i == n - 1){
            return true;
        }else if(arr[i] == 0){
            if(i == n - 1){
                return true;
            }else{
                return false;
            }
        }else if(arr[i] + i == n - 1){
            return true;
        }

        int maxJumps = arr[i];
        int j = maxJumps;

        while(j >= 1){
            if(i + j > n - 1){
                j = n - i - 1;
                continue;
            }else if(visited.containsKey(i + j)){
                j--;
                continue;
            }else{
                boolean nextAns = helper(arr,i + j,n,visited);
                if(nextAns){
                    return true;
                }else{
                    visited.put(i+j,false);
                    j--;
                }
            }
        }

        return false;
    }

    public boolean canJump(int[] nums) {
        HashMap<Integer,Boolean> visited = new HashMap<>();
        return helper(nums,0,nums.length,visited);    
    }
}