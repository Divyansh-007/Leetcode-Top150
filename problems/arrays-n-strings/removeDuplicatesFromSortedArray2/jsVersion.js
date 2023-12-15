/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let temp = [ ...nums ];
  while(nums.length > 0) nums.pop();
  for(let i = 0 ; i < temp.length; i++){
      if(nums.filter(j => j == temp[i]).length < 2) nums.push(temp[i]);
  }
  return nums.legnth;
};