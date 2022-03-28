/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let res = null;
  let visited = new Set();

  helper(nums.length - 1, 0);

  return res;

  function helper(currentIndex, acc) {
    if (currentIndex === 0) {
      res = acc;
      return;
    }

    for (let i = 0; i < currentIndex; i++) {
      if (visited.has(i)) continue;

      if (nums[i] >= currentIndex - i) {
        helper(i, acc + 1);
        visited.add(i);
      }

      if (res !== null) return;
    }
  }
};
