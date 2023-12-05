/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const map = new Map();
  const map2 = new Map();

  t.split("").forEach(i => map.set(i, map.get(i) ? map.get(i)+1 : 1));
  s.split("").forEach(i => map2.set(i, map2.get(i) ? map2.get(i)+1 : 1));

  if(map.size === map2.size && Array.from(map.keys()).every(key => map.get(key) == map2.get(key))){
      return true;
  }else{
      return false;
  }

};