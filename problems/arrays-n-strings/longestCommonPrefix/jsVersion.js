/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // find the length of smallest element
  let lengthOfSmallest = Number.MAX_SAFE_INTEGER;

  strs.forEach(i => { if (lengthOfSmallest > i.length) lengthOfSmallest = i.length })

  let ans = [];
  for (let i = 0; i < lengthOfSmallest; i++) {
      let arr = [];
      for (let j = 0; j < strs.length; j++) {
          arr.push(strs[j][i]);
      }
      let same = true;
      arr.forEach(i => {
          if (same == true && i != arr[0]) {
              same = false;
          }
      }
      )
      if (same) {
          ans.push(strs[0][i]);
      } else {
          return ans.join("");
      }
  }

  return ans.join("");
};