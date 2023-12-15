/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let temp = [...nums];
  let i = 0;
  while(i < temp.length) {
      nums.pop();
      i++;
  }
  for(let i = 0 ; i < temp.length ; i++){
      if(!nums.includes(temp[i])) nums.push(temp[i]);
  }
  
  return nums.length;
};