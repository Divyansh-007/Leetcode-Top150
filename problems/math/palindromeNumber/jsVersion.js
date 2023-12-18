/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) return false;

  let reverse = 0;
  let copy = x;
  let i = 0;
  while(x > 0){
      let temp = x % 10;
      reverse = reverse * 10 + temp;
      x = parseInt(x/10);
      i++;
  }

  if(reverse == copy){
      return true;
  }else{
      return false;
  }
};