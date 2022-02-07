/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (n, dislikes) {
  const edgeMap = dislikes.reduce((map, [a, b]) => {
    map.set(a, [...(map.get(a) || []), b]);
    map.set(b, [...(map.get(b) || []), a]);
    return map;
  }, new Map());

  const visited = Array.from({ length: n + 1 }, () => false);
  const colors = Array.from({ length: n + 1 }, () => 0);

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    if (hasWrongColor(i)) return false;
  }

  return true;

  function hasWrongColor(vertex) {
    const remainColors = new Set([1, 2]);
    const nextVertices = edgeMap.get(vertex);

    if (nextVertices) {
      for (const nextVertex of nextVertices) {
        if (colors[nextVertex] === 1) remainColors.delete(1);
        if (colors[nextVertex] === 2) remainColors.delete(2);
      }

      if (remainColors.size === 0) return true;

      visited[vertex] = true;
      colors[vertex] = [...remainColors][0];

      for (const nextVertex of nextVertices) {
        if (visited[nextVertex] === true) continue;
        if (hasWrongColor(nextVertex)) return true;
      }
    }
    return false;
  }
};

console.log(
  possibleBipartition(3, [
    [1, 2],
    [1, 3],
    [2, 3],
  ])
);
