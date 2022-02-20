/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let res = 0;
  let left = 0;

  let subString = s[left];

  for (let right = 0; right < s.length; right++) {
    if (subString.includes(s[right])) {
      const indexOfCurrentChar = subString.indexOf(s[right]);

      subString = subString.slice(indexOfCurrentChar + 1) + s[right];
      left = indexOfCurrentChar + 1;
    } else {
      subString += s[right];
    }

    res = Math.max(res, subString.length);
  }

  return res;
};
