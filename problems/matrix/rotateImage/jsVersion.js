/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  // transpose
  for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < i; j++) {
          const temp = matrix[i][j];
          matrix[i][j] = matrix[j][i];
          matrix[j][i] = temp;
      }
  }

  //reverse rows
  for(let i = 0; i < matrix.length; i++){
      matrix[i] = matrix[i].reverse()
  }
};