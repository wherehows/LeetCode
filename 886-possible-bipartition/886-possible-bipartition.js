var possibleBipartition = function (N, dislikes) {
  const edgeMap = dislikes.reduce((map, [a, b]) => {
    map.set(a, [...(map.get(a) || []), b]);
    map.set(b, [...(map.get(b) || []), a]);
    return map;
  }, new Map());

  const visited = Array.from({ length: N }, () => false);

  const colors = Array.from({ length: N }, () => 0);

  for (let v = 1; v <= N; v++) {
    if (!dfs(v)) return false;
  }

  return true;

  function dfs(vertex) {
    if (visited[vertex]) return true;

    const currColor = new Set([1, 2]);

    const nextChild = edgeMap.get(vertex);

    if (nextChild) {
      for (const child of nextChild) {
        if (colors[child] === 1) currColor.delete(1);
        if (colors[child] === 2) currColor.delete(2);
      }

      if (currColor.size === 0) return false;

      colors[vertex] = Math.min(...currColor);
      visited[vertex] = true;

      for (const child of nextChild) {
        if (!dfs(child)) return false;
      }
    }
    return true;
  }
};
