/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = new Map();

  Array.from(magazine).forEach(i => map.set(i, map.get(i) ? map.get(i)+1 : 1));

  for(let i = 0 ; i < ransomNote.length; i++){
      let value = map.get(ransomNote[i]);
      if(!value || value === 0) return false;
      value--;
      map.set(ransomNote[i], value);
  }
  
  return true;
};