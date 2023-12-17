/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let rows = [];
  let cols = [];
  for(let i = 0 ; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length; j++){
          if(matrix[i][j] == 0) {
              rows.push(i);
              cols.push(j);
          }
      }
  }

  for(let i = 0 ; i < matrix.length; i++){
      if(rows.includes(i)) matrix[i] = Array(matrix[i].length).fill(0)
      for(let j = 0; j < matrix[i].length; j++){
          if(cols.includes(j)) matrix[i][j] = 0;
      }
  }
};