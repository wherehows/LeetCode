var maximumSwap = function (num) {
  num = num.toString().split("");

  let maxPosition = num.length - 1;
  let posToChange = [];

  for (let i = num.length - 1; i >= 0; i--) {
    if (num[maxPosition] < num[i]) {
      maxPosition = i;
      posToChange[i] = i;
      continue;
    }

    posToChange[i] = maxPosition;
  }

  console.log(posToChange);

  for (let i = 0; i < num.length; i++) {
    if (num[i] < num[posToChange[i]]) {
      [num[i], num[posToChange[i]]] = [num[posToChange[i]], num[i]];
      break;
    }
  }

  return +num.join("");
};
