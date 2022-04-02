var networkDelayTime = function (times, n, k) {
  const current = new Set();
  const next = new Set();
  const timeOfEachNode = Array.from(
    { length: n + 1 },
    () => Number.MAX_SAFE_INTEGER
  );
  timeOfEachNode[0] = 0;
  timeOfEachNode[k] = 0;
  current.add(k);

  for (let i = 0; i < n; i++) {
    for (const [u, v, w] of times) {
      if (!current.has(u)) continue;
      if (timeOfEachNode[u] + w >= timeOfEachNode[v]) continue;
      timeOfEachNode[v] = timeOfEachNode[u] + w;
      next.add(v);
    }
    current.clear();
    [...next].forEach((value) => current.add(value));
    next.clear();
  }

  return Math.max(...timeOfEachNode) !== Number.MAX_SAFE_INTEGER
    ? Math.max(...timeOfEachNode)
    : -1;
};
