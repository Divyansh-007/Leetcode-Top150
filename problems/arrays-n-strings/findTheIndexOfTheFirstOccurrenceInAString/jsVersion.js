/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  for(let i = 0; i < haystack.length; i++){
      if(haystack[i] == needle[0]){
          let found = false;
          let j = 1;
          while(!found){
              if(j == needle.length) found = true;
              if(haystack[i+j] != needle[j]) break;
              j++;
          }
          if(found) return i;
      }
  }
  return -1;
};