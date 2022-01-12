var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];
  const res = [1];

  const numberToInsert = rowIndex - 1;

  const prior = getRow(rowIndex - 1);

  for (let i = 1; i <= numberToInsert; i++) {
    res.push(prior[i - 1] + prior[i]);
  }

  res.push(1);

  return res;
};