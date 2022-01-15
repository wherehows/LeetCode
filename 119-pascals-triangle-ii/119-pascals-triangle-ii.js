var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];

  let prior = [1, 1];
  let next = [];

  for (let i = 2; i < rowIndex + 1; i++) {
    next = [];

    for (let j = 0; j < i + 1; j++) {
      if (j === 0) next.push(1);
      else if (j === i) next.push(1);
      else next.push(prior[j - 1] + prior[j]);
    }

    prior = next;
  }

  return next;
};