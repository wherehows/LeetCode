/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const zero = [1];
  const first = [1, 1];

  if (rowIndex <= 1) return rowIndex === 0 ? zero : first;

  return helper(1, [1, 1]);

  function helper(currentLevel, prior) {
    if (currentLevel === rowIndex) return prior;

    const next = [1];

    for (let index = 0; index < currentLevel; index++) {
      next.push(prior[index] + prior[index + 1]);
    }

    next.push(1);

    return helper(currentLevel + 1, next);
  }
};
