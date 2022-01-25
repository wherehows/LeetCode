var coinChange = function (coins, amount) {
  const map = {};
  let min = Math.min(...coins);

  if (amount === 0) return 0;

  const getRes = findAnswer(coins, amount);

  return getRes === Infinity ? -1 : getRes;

  function findAnswer(coins, amount) {
    if (coins.includes(amount)) return 1;
    if (amount < min || map[amount] === Infinity) return Infinity;
    if (map[amount] && map[amount] !== Infinity) return map[amount];

    let minNumber = Infinity;

    for (let i = 0; i < coins.length; i++) {
      const diff = amount - coins[i];
      const res = findAnswer(coins, diff) + 1;
      minNumber = Math.min(minNumber, res);
    }

    map[amount] = minNumber;

    return minNumber;
  }
};