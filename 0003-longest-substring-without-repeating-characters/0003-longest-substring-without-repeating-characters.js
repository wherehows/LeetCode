/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0;
    
    let res = 1;
    let previous = s[0];
    
    for(right = 1; right < s.length; right++) {
      const visitedIndex = previous.indexOf(s[right]);

      if(visitedIndex !== -1) {
        res = Math.max(res, previous.length);
        previous = previous.slice(visitedIndex + 1, previous.length);
        previous += s[right];
      } else {
        previous += s[right];
        res = Math.max(res, previous.length);
      }
    }

    return res;
};