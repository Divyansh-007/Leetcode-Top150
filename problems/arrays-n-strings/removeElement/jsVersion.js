/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let arr = nums.filter(i => i != val);
  while(nums.length > 0) nums.pop();
  for(let i = 0 ; i < arr.length; i++)nums.push(arr[i]);
  return nums.filter(i => i != val).length;
};