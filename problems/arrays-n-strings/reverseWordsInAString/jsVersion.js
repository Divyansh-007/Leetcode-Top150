/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s =  s.trim().split(" ").reverse();
  let ans = [];
  s.forEach(i => {
      if(i.length > 0) ans.push(i)
  })
  return ans.join(" ");
};