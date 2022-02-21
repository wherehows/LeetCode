/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let memo = {};

  return s.split("").reduce((res, alphabet, index) => {
    left = memo[alphabet] >= left ? memo[alphabet] + 1 : left;
    memo[alphabet] = index;
    return Math.max(res, index - left + 1);
  }, 0);
};