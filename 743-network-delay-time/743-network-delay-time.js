var networkDelayTime = function (times, n, k) {
  const timeCheck = Array.from({ length: n + 1 }, () => Infinity);
  const visited = new Set();

  const edgeMap = times.reduce((map, [start, end, time]) => {
    map.set(start, [...(map.get(start) || []), [end, time]]);
    return map;
  }, new Map());

  visited.add(k);
  helper(k, 0);

  return visited.size !== n
    ? -1
    : Math.max(...timeCheck.filter((value) => value !== Infinity));

  function helper(node, acc) {
    const nextNodes = edgeMap.get(node);

    if (nextNodes) {
      for (const [nextNode, time] of nextNodes) {
        if (time + acc >= timeCheck[nextNode] || nextNode === k) continue;
        visited.add(nextNode);
        timeCheck[nextNode] = acc + time;
        helper(nextNode, time + acc);
      }
    }
  }
};
