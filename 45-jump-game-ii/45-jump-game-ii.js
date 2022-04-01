var jump = function (nums) {
  let jump = 0;
  let oldMax = 0;
  let newMax = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    newMax = Math.max(i + nums[i], newMax);

    if (oldMax === i) {
      jump++;
      oldMax = newMax;
    }
  }

  return jump;
};