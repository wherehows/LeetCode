/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  return helper(triangle.shift());

  function helper(prior) {
    if (triangle.length === 0) return Math.min(...prior);

    const next = [];
    const currentLevel = triangle.shift();

    for (let i = 0; i < prior.length; i++) {
      next.push(prior[i] + currentLevel[i]);
      next.push(prior[i] + currentLevel[i + 1]);
    }

    const filtered = [];
    filtered.push(next[0]);

    for (let i = 1; i < next.length - 1; i += 2) {
      const first = next[i];
      const second = next[i + 1];
      const lowerValue = first < second ? first : second;
      filtered.push(lowerValue);
    }

    filtered.push(next[next.length - 1]);

    console.log(filtered);

    return helper(filtered);
  }
};
