/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  let arr = [];

  let colTemp = Math.floor(s.length / numRows);
  for (let i = 0; i < numRows; i++) {
      arr.push(Array(colTemp).fill("-"));
  }

  let row = 0;
  let col = 0;
  let down = true;
  let till = s.length;

  for (let i = 0; i < till; i++) {
      arr[row][col] = s[i];
      if (down) {
          row++;
      } else {
          row--;
          col++;
      }
      if (row === 0) down = true;
      if (row === numRows-1) down = false;
  }


  let ans = [];
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
          if (arr[i][j] != "-") ans.push(arr[i][j]);
      }
  }
  return ans.join("");
}

