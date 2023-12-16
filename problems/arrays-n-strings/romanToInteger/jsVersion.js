/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let values = [1, 5, 10, 50, 100, 500, 1000];
  let symbols = ["I", "V", "X", "L", "C", "D", "M"];

  let ans = 0;    
  if(s.length == 1) return values[symbols.indexOf(s[0])];
  ans = values[symbols.indexOf(s[s.length-1])]
  for(let i = s.length - 2 ; i >= 0; i--){
      if(symbols.indexOf(s[i+1]) == symbols.indexOf(s[i])){
          ans += values[symbols.indexOf(s[i])];
      }else if(symbols.indexOf(s[i+1]) < symbols.indexOf(s[i])){
          ans += values[symbols.indexOf(s[i])];
      }else if(symbols.indexOf(s[i+1]) > symbols.indexOf(s[i])){
          ans -= values[symbols.indexOf(s[i])];
      }
      console.log(ans);
  }

  return ans;
};