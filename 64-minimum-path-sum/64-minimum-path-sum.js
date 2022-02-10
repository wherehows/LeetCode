/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const rowLength = grid[0].length;
  const colLength = grid.length;

  const map = Array.from({ length: colLength }, () =>
    Array.from({ length: rowLength }, () => 0)
  );

  map[0][0] = grid[0][0];

  for (let n = 1; n < rowLength; n++) {
    map[0][n] = grid[0][n] + map[0][n - 1];
  }

  for (let m = 1; m < colLength; m++) {
    map[m][0] = grid[m][0] + map[m - 1][0];
  }

  for (let m = 1; m < colLength; m++) {
    for (let n = 1; n < rowLength; n++) {
      if (map[m - 1][n] > map[m][n - 1]) map[m][n] = map[m][n - 1] + grid[m][n];
      else map[m][n] = map[m - 1][n] + grid[m][n];
    }
  }

  return map[colLength - 1][rowLength - 1];
};