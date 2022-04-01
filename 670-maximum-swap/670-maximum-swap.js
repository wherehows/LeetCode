/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  num = num + "";
  let array = num.split("").sort();
  let minimumIndex = null;
  let maximumIndex = array.length - 1;
  let res = num.split("");

  for (let i = 0; i < num.length; i++) {
    if (array[maximumIndex] === num[i]) {
      maximumIndex--;
      continue;
    }

    minimumIndex = i;

    let j = num.length - 1;

    while (num[j] !== array[maximumIndex]) {
      j--;
      if (j === i) break;
    }

    [res[j], res[minimumIndex]] = [res[minimumIndex], res[j]];
    break;
  }

  return Number(res.join(""));
};

console.log(maximumSwap(2736));
