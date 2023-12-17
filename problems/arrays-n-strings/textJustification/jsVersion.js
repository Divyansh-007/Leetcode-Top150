/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let ans = [];

  let str = "";
  for (let i = 0; i < words.length; i++) {
      if ((words[i].length + str.length) < maxWidth) {
          str += words[i] + " ";
      } else if ((words[i].length + str.length) == maxWidth) {
          str += words[i];
      } else {
          ans.push(str);
          str = "";
          i--;
      }
      if (i == words.length - 1) ans.push(str);
  }

  for (let i = 0; i < ans.length; i++) {
      let str = ans[i].trim();
      let totalSpace = str.split("").filter(i => i[0] == " ").length;
      if (totalSpace > 0 && i != ans.length - 1) {
          let current = 0;
          while (str.length != maxWidth) {
              let index = 0;
              let temp = -1;
              for (let k = 0; k < str.length - 1; k++) {
                  if (str[k] == " " && str[k + 1] != " ") temp++;
                  if (temp == current) {
                      index = k;
                      temp = -1;
                      break;
                  }
              }
              str = str.split("");
              str.splice(index, 0, " ");
              str = str.join("");
              current++;
              if (current == totalSpace) current = 0;
          }
          ans[i] = str;
      } else {
          while (ans[i].length != maxWidth) {
              ans[i] += " ";
          }
      }
  }

  return ans;
};