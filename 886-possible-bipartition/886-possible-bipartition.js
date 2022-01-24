/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */

var possibleBipartition = function (n, dislikes) {
  const edgeMap = dislikes.reduce((map, [a, b]) => {
    if (map.has(a)) {
      const arr1 = map.get(a);
      arr1.push(b);
    } else {
      map.set(a, [b]);
    }

    if (map.has(b)) {
      const arr1 = map.get(b);
      arr1.push(a);
    } else {
      map.set(b, [a]);
    }

    return map;
  }, new Map());

  const setA = new Set();
  const setB = new Set();
  let res = true;

  for (const num of edgeMap.keys()) {
    if (setA.has(num) || setB.has(num)) continue;
    setA.add(num);
    check(num, "a");
  }

  return res;

  function check(num, set) {
    if (!res) return;

    if (set === "a") {
      const nextVisits = edgeMap.get(num);

      for (const next of nextVisits) {
        if (setA.has(next)) {
          res = false;
          return;
        }

        if (!setB.has(next)) {
          setB.add(next);
          check(next, "b");
        }
      }
    }

    if (set === "b") {
      const nextVisits = edgeMap.get(num);

      for (const next of nextVisits) {
        if (setB.has(next)) {
          res = false;
          return;
        }
        if (!setA.has(next)) {
          setA.add(next);
          check(next, "a");
        }
      }
    }
  }
};

console.log(
  possibleBipartition(3, [
    [1, 2],
    [1, 3],
    [2, 4],
  ])
);
