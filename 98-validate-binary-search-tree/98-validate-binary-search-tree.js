var isValidBST = function (root, min = null, max = null) {
  if (!root) return true;

  return (
    checkSelf(root) &&
    checkSonOfSon(root, min, max) &&
    isValidBST(root.left, min, root) &&
    isValidBST(root.right, root, max)
  );
};

const checkSelf = (node) => {
  if (node.left && node.left.val >= node.val) return false;
  if (node.right && node.right.val <= node.val) return false;
  return true;
};

const checkSonOfSon = (node, min, max) => {
  if (min && node.left?.val <= min.val) return false;
  if (max && node.right?.val >= max.val) return false;
  return true;
};