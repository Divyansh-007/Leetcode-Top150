/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let start = null;
  let ans = [];
  let temp = 0;

  if(nums.length === 1) return [nums[0]+""]

  for(let i = 0; i < nums.length ; i++){
      if(start == null){
          start = nums[i];
          temp = nums[i];
          continue;
      }
      if(temp + 1 == nums[i]){
          temp++;
      }else{
          if(start === temp){
              ans.push(start+"");
          }else{
              ans.push(`${start}->${temp}`);
          }
          start = nums[i];
          temp = nums[i];
      }

      // for last
      if(i == nums.length - 1){
           if(start === temp){
              ans.push(start+"");
          }else{
              ans.push(`${start}->${temp}`);
          }
      }
  }


  return ans;
};