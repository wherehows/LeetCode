/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  let sum = 0;
  let res = "";
  const BASE = 97;

  for (let i = shifts.length - 1; i >= 0; i--) {
    const currentWordCode = s[i].charCodeAt(0) - BASE;
    const shiftedWordCode = (currentWordCode + sum + shifts[i]) % 26;
    res = alphabet[shiftedWordCode] + res;
    sum += shifts[i];
  }

  return res;
};