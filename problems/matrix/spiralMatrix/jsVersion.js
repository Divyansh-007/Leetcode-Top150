/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let ans = [];
  let row = 0;
  let col = 0;

  if(matrix.length == 1 && matrix[0].length === 1) return [matrix[0][0]];
  let totalLength = matrix.length * matrix[0].length;

  ans = [matrix[0][0]];
  matrix[0][0] = "-";
  let direction = "L";

  for(let i = 1 ; i < totalLength; i++){
      if(direction === "L"){
          if(col == matrix[0].length-1){
              direction = "D";
              i--;
          }else{
              col++;
              if(matrix[row][col] === "-"){
                  col--;
                  i--;
                  direction = "D";
              }else{
                  ans.push(matrix[row][col])
                  matrix[row][col] = "-"
              }
          }
      }else if(direction === "D"){
          if(row == matrix.length-1){
              direction = "R";
              i--;
          }else{
              row++;
              if(matrix[row][col] == "-"){
                  row--;
                  i--;
                  direction = "R";
              }else{
                  ans.push(matrix[row][col])
                  matrix[row][col] = "-"
              }
          }
      }else if(direction === "R"){
          if(col == 0){
              direction = "U";
              i--;
          }else{
              col--;
              if(matrix[row][col] == "-"){
                  col++;
                  i--;
                  direction = "U";
              }else{
                  ans.push(matrix[row][col])
                  matrix[row][col] = "-"
              }
          }
      }else if(direction === "U"){
          if(row == 0){
              direction = "L";
              i--;
          }else{
              row--;
              if(matrix[row][col] == "-"){
                  row++;
                  i--;
                  direction = "L";
              }else{
                  ans.push(matrix[row][col])
                  matrix[row][col] = "-"
              }
          }
      }
  }

  return ans;
};