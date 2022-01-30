var canFinish = function (numCourses, prerequisites) {
  const inDegrees = Array.from({ length: numCourses }, () => 0);

  const edgeMap = prerequisites.reduce((map, [a, b]) => {
    map.set(b, [...(map.get(b) || []), a]);
    inDegrees[a]++;
    return map;
  }, new Map());

  const queue = inDegrees.reduce((arr, current, i) => {
    if (current === 0) arr.push(i);
    return arr;
  }, []);

  while (queue.length) {
    const nextVertics = edgeMap.get(queue.shift());
    if (nextVertics) {
      for (const nextVertex of nextVertics) {
        inDegrees[nextVertex]--;
        if (inDegrees[nextVertex] === 0) queue.push(nextVertex);
      }
    }
  }

  return !inDegrees.some((val) => val > 0);
};
