/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = 0;
  let ans = 0;
  for(let i = 0; i < nums.length; i++){
      if(count == 0){
          ans = nums[i];
          count = 1;
      }else if(ans == nums[i]){
          count++;
      }else{
          count--;
      }
  }
 
  return ans;
};