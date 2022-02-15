/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid[0].length;
  const n = grid.length;

  const minGrid = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => undefined)
  );

  return helper([0, 0]);

  function helper(pos) {
    const [x, y] = pos;
    if (x >= m || y >= n) return Number.MAX_SAFE_INTEGER;
    if (x === m - 1 && y === n - 1) return grid[y][x];
    if (minGrid[y][x]) return minGrid[y][x];

    const currentPosValue = grid[y][x];

    const minValueOfRight = helper([x + 1, y]);
    const minValueOfDown = helper([x, y + 1]);

    minGrid[y][x] = Math.min(minValueOfRight, minValueOfDown) + currentPosValue;

    return minGrid[y][x];
  }
};