/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let map = {};

   while(n != 1){
       if(map[n]){
           return false;
       }else{
           map[n] = true;
           let sum = 0;
           (n+"").split("").forEach(i => sum += Math.pow(i, 2));
           n = sum;
           console.log(map, n)
       }
   }

   return true;
};