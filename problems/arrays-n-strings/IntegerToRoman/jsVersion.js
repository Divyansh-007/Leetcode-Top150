/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let values = [1, 5, 10, 50, 100, 500, 1000];
  let symbols = ["I", "V", "X", "L", "C", "D", "M"];

  let ans = [];

  while(num >= 0){
      let firstDigit = (num+"")[0]
      if(firstDigit == 9 || firstDigit == 4){
          let j = 0;
          while(num >= values[j]) j++;
          ans.push(symbols[firstDigit == 9 ? j-2 : j-1]);
          ans.push(symbols[j]);
          let temp = values[j] - values[firstDigit == 9 ? j-2 : j-1];
          num -= temp;
      }else{
          let j = 0;
          while(num >= values[j]) j++;
          ans.push(symbols[j-1]);
          num -= values[j-1];
      }
  }

  return ans.join("");
};