/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let check = {};

  for (let i = 0; i < s.length; i++) {
    check[s[i]] = (check[s[i]] || 0) + 1;
    check[t[i]] = (check[t[i]] || 0) - 1;
  }

  check[t[t.length - 1]] = (check[t[t.length - 1]] || 0) - 1;
  console.log(check);

  const arr = Object.entries(check);

  return arr.find(([key, value]) => {
    return value !== 0;
  })[0];
};