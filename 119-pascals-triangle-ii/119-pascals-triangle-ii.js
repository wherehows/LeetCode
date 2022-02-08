/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const zero = [1];
  const first = [1, 1];

  if (rowIndex <= 1) return rowIndex === 0 ? zero : first;

  let prior = [1, 1];

  for (let i = 2; i <= rowIndex; i++) {
    const next = [1];

    for (let j = 1; j < i; j++) {
      next.push(prior[j - 1] + prior[j]);
    }

    next.push(1);
    prior = next;
  }

  return prior;
};