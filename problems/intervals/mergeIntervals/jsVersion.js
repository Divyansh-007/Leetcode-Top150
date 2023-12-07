/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let ans = [];
  if(intervals.length == 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);
  
  let temp = intervals[0];

  for(let i = 1; i < intervals.length; i++){
      if(temp[1] >= intervals[i][0]){
          // merge
          temp = [Math.min(temp[0], intervals[i][0]), Math.max(temp[1], intervals[i][1])];
      }else{
          ans.push(temp);
          temp = intervals[i];
      }
  }

  ans.push(temp);

  return ans;
};