/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let ans = 0;
  while(n > 0){
      n = Math.floor(n/5);
      console.log(n)
      ans += n;
  }

  return ans;
};