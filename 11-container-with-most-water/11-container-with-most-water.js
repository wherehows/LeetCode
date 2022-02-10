var maxArea = function (height) {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let res = Number.MIN_SAFE_INTEGER;

  while (leftPointer < rightPointer) {
    const leftHeight = height[leftPointer];
    const rightHeight = height[rightPointer];
    let area = null;

    if (leftHeight < rightHeight) {
      area = (rightPointer - leftPointer) * leftHeight;
      leftPointer++;
    } else {
      area = (rightPointer - leftPointer) * rightHeight;
      rightPointer--;
    }
    res = Math.max(res, area);
  }

  return res;
};