/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const queue = [];
  let visitedCount = 0;

  const inDegrees = Array.from({ length: numCourses }, () => 0);

  const edgeMap = prerequisites.reduce((map, [a, b]) => {
    map.set(b, [...(map.get(b) || []), a]);
    inDegrees[a]++;

    return map;
  }, new Map());

  inDegrees.forEach((inDegree, i) => {
    if (inDegree === 0) queue.push(i);
  });

  while (queue.length) {
    const vertex = queue.shift();
    if (edgeMap.has(vertex)) {
      const nextVertexs = edgeMap.get(vertex);
      for (const nextVertex of nextVertexs) {
        inDegrees[nextVertex]--;
        if (inDegrees[nextVertex] === 0) queue.push(nextVertex);
      }
    }

    visitedCount++;
  }

  return numCourses === visitedCount;
};
