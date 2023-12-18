/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  var arr = JSON.parse(JSON.stringify(board))
  for(let i = 0; i < arr.length; i++){
      for(let j = 0 ; j < arr[0].length; j++){
          let temp = [];
          let maxRow = arr.length - 1;
          let maxCol = arr[i].length - 1;
          if(i > 0 && j > 0) temp.push(arr[i-1][j-1])
          if(i > 0) temp.push(arr[i-1][j])
          if(i != 0 && j != maxCol) temp.push(arr[i-1][j+1])

          if(j > 0) temp.push(arr[i][j-1])
          if(j != maxCol ) temp.push(arr[i][j+1])

          if(i != maxRow && j != 0 ) temp.push(arr[i+1][j-1])
          if(i != maxRow ) temp.push(arr[i+1][j])
          if(i != maxRow && j != maxCol ) temp.push(arr[i+1][j+1])

          let iInArray = temp.filter(i => i == 1).length

          if(arr[i][j] == 0 && iInArray == 3){
              board[i][j] = 1;
          }else{
              if(arr[i][j] == 1 && (iInArray == 3 || iInArray == 2 )){
                  board[i][j] = 1;
              }else if(board[i][j] == 1 && iInArray < 2){
                  board[i][j] = 0;
              }else if(board[i][j] == 1 && iInArray > 3){
                  board[i][j] = 0;
              }    
          }
      }
  }
};