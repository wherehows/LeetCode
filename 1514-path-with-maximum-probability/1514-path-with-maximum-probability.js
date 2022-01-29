/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start, end) {
  const edgeMap = edges.reduce((map, [a, b], i) => {
    map.set(b, [...(map.get(b) || []), [a, succProb[i]]]);
    map.set(a, [...(map.get(a) || []), [b, succProb[i]]]);
    return map;
  }, new Map());

  const visited = Array.from({ length: n }, () => -Infinity);

  const queue = [[start, 1]];
  visited[start] = 1;

  let res = 0;

  while (queue.length) {
    const [next, prob] = queue.shift();

    if (next === end) {
      res = Math.max(res, prob);
      continue;
    }

    if (visited[next] > prob) continue;

    const vertexsToVisit = edgeMap.get(next);

    if (vertexsToVisit) {
      for (const [nextVertex, nextProb] of vertexsToVisit) {
        if (visited[nextVertex] < nextProb * prob) {
          visited[nextVertex] = nextProb * prob;
          queue.push([nextVertex, nextProb * prob]);
        }
      }
    }
  }

  return res;
};