/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) return 0;
  const visited = new Array(nums.length).fill(null);
  visited[0] = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentJump = visited[i];
    const maxJump = nums[i];

    for (let j = maxJump; j >= 1; j--) {
      if (visited[i + j]) {
        break;
      } else {
        visited[i + j] = currentJump + 1;
      }
    }

    if (visited[visited.length - 1]) {
      return visited[visited.length - 1];
    }
  }

  return visited[visited.length - 1];
};

console.log(jump([5]));
