var canFinish = function (numCourses, prerequisites) {
  const edgeMap = prerequisites.reduce((map, [a, b]) => {
    map.set(b, [...(map.get(b) || []), a]);
    return map;
  }, new Map());

  const visited = new Set();
  const visiting = new Set();

  for (const [a, b] of edgeMap) {
    if (isCyclic(a)) return false;
  }

  return true;

  function isCyclic(currentVertex) {
    const nextVertics = edgeMap.get(currentVertex);
    visiting.add(currentVertex);

    if (nextVertics) {
      for (const nextVertex of nextVertics) {
        if (visited.has(nextVertex)) continue;
        if (visiting.has(nextVertex)) return true;
        if (isCyclic(nextVertex)) return true;
      }
    }

    visited.add(currentVertex);
    visiting.delete(currentVertex);
    return false;
  }
};