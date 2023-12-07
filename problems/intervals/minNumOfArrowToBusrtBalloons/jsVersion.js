/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if(points.length == 0 ) return 0;
  points.sort((a, b) => a[1] - b[1]);
  let counter = 1;
  let temp = points[0];

  for(let i = 1 ; i < points.length ; i++){
      if(temp[1] < points[i][0]){
          counter++;
          temp = points[i];
      }
  }

  return counter;
};