/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let total = 0;
  let prior = 0;
  let res = null;

  for (let i = 0; i < gas.length; i++) {
    res = i;

    while (1) {
      if (i >= gas.length) break;
      if (prior + gas[i] - cost[i] < 0) {
        total += gas[i] - cost[i];
        prior = 0;
        break;
      }

      prior += gas[i] - cost[i];
      total += gas[i] - cost[i];
      i++;
    }
  }

  return total < 0 ? -1 : res;
};
