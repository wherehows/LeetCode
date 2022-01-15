/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let minValue = Number.MAX_SAFE_INTEGER;
  const lastXPos = grid[0].length - 1;
  const lastYPos = grid.length - 1;
  const duplicated = new Array(lastYPos + 1)
    .fill(0)
    .map((_) => new Array(lastXPos + 1).fill(Number.MAX_SAFE_INTEGER));

  helper(0, 0, 0);

  return minValue;

  function helper(prior, x, y) {
    if (y > lastYPos || x > lastXPos) return;

    if (x === lastXPos && y === lastYPos) {
      minValue = Math.min(minValue, prior + grid[lastYPos][lastXPos]);
      return;
    }

    const next = prior + grid[y][x];

    if (duplicated[y][x]) {
      if (duplicated[y][x] > next) {
        duplicated[y][x] = next;
        helper(next, x + 1, y);
        helper(next, x, y + 1);
      }
    } else {
      duplicated[y][x] = next;
      helper(next, x + 1, y);
      helper(next, x, y + 1);
    }
  }
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);
