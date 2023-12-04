/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const map = new Map();

   for(let i = 0 ; i < s.length; i++){
       if(map.get(s[i])){
           if(map.get(s[i]) != t[i]) return false;
       }else{
           if(Array.from(map.values()).includes(t[i])) return false;
           map.set(s[i], t[i]);
       }
   }

   return true;
};