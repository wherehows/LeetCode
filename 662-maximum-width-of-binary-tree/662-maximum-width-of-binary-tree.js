var widthOfBinaryTree = function (root) {
  let startOfEachLevel = [];
  let res = 0;

  helper(root, 0, 1);

  return res;

  function helper(root, index, level) {
    if (!root) return;
    if (startOfEachLevel[level] === undefined) startOfEachLevel[level] = index;

    const width = index - startOfEachLevel[level] + 1;
    res = Math.max(res, width);

    helper(root.left, width * 2, level + 1);
    helper(root.right, width * 2 + 1, level + 1);
  }
};