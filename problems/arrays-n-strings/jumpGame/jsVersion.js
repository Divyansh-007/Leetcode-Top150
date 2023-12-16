/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let current = nums[0];
  for(let i = 1 ; i < nums.length; i++){
      if(current == 0) return false;
      if(current <= nums[i]){
          current = nums[i];
      }else{
          current--;
      }
  }
 
  return true;
};