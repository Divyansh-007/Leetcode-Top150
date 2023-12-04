/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  const map = new Map();

  let sArray = s.split(" ");

  if(sArray.length != pattern.split("").length) return false;

  for(let i = 0 ; i < pattern.length ; i++){
      if(map.get(pattern[i])){
          if(map.get(pattern[i]) != sArray[i]) return false;
      }else{
          if(Array.from(map.values()).includes(sArray[i])) return false;
          map.set(pattern[i], sArray[i]);
      }
  }

  return true;
};