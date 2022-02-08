/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  let res = 0;
  if (!root) return res;

  helper(root);

  return res;

  function helper(root, priorVal) {
    if (!root) return 0;

    const currentVal = root.val;

    const maxLeftLength = helper(root.left, currentVal);
    const maxRightLength = helper(root.right, currentVal);

    res = Math.max(res, maxLeftLength + maxRightLength);

    if (priorVal === currentVal) {
      return Math.max(maxLeftLength, maxRightLength) + 1;
    }

    if (priorVal !== currentVal) {
      return 0;
    }
  }
};
