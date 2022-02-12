/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  if (numCourses === 1) return [0];

  const inDegrees = Array.from({ length: numCourses }, () => 0);

  const edgeMap = prerequisites.reduce((map, [a, b]) => {
    map.set(b, [...(map.get(b) || []), a]);

    inDegrees[a]++;
    return map;
  }, new Map());

  const res = [];

  const queue = inDegrees.reduce((arr, inDegree, index) => {
    if (inDegree === 0) arr.push(index);
    return arr;
  }, []);

  while (queue.length) {
    const currentVertex = queue.shift();
    const nextVertices = edgeMap.get(currentVertex);
    res.push(currentVertex);

    if (nextVertices) {
      for (const nextVertex of nextVertices) {
        inDegrees[nextVertex]--;
        if (inDegrees[nextVertex] === 0) queue.push(nextVertex);
      }
    }
  }

  return inDegrees.some((inDegree) => inDegree !== 0) ? [] : res;
};
