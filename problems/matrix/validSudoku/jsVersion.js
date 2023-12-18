/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {

  // checking rows ans columns
  for(let i = 0 ; i < board.length; i++){
      let row = board[i].filter(i => i != ".");
      let col = [];
      let rowSet = new Set();
      row.forEach(i => rowSet.add(i));
      if(rowSet.size !== row.length) return false;

      for(let j = 0 ; j < board[i].length; j++) col.push(board[j][i])
      col = col.filter(i => i != ".")
      let colSet = new Set();
      col.forEach(i => colSet.add(i));
      if(colSet.size !== col.length) return false;
  }

  // checking 3x3
  for(let i = 0 ; i < 81; i = i+3){
      let col = i%9;
      let row = Math.floor(i/27)*3;
  
      let list = [ board[row][col], board[row][col+1], board[row][col+2],
      board[row+1][col], board[row+1][col+1], board[row+1][col+2],
      board[row+2][col], board[row+2][col+1], board[row+2][col+2]]

      list = list.filter(i => i!=".")
      let set = new Set();
      list.forEach(i => set.add(i));
      if(set.size !== list.length) return false;
  }

  return true;
};