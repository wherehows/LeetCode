const memoization = {};

var climbStairs = function (n) {
  if (n === 2) return 2;
  if (n === 1) return 1;
  if (n === 0) return 1;

  const beforeOneStep = memoization[n - 1] || climbStairs(n - 1);
  const beforeTwoStep = memoization[n - 2] || climbStairs(n - 2);

  if (!memoization[n]) memoization[n] = beforeOneStep + beforeTwoStep;

  return beforeOneStep + beforeTwoStep;
};
