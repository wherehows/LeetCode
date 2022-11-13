/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const unionFind = new UnionFind(isConnected.length);

  for (let i = 0; i < isConnected.length; i++) {
    for (let j = i; j < isConnected[0].length; j++) {
      if (i >= j || isConnected[i][j] !== 1) continue;

      unionFind.union(i, j);
    }
  }

  return [...unionFind.disjointSet().keys()].length;
};

class UnionFind {
  constructor(n) {
    this.root = new Array(n).fill(null).map((_, idx) => idx);
  }

  find(v) {
    if (v === this.root[v]) {
      return v;
    }

    return this.find(this.root[v]);
  }

  union(v1, v2) {
    console.log(v1, v2);
    const root1 = this.find(v1),
      root2 = this.find(v2);

    if (root1 < root2) {
      this.root[root2] = root1;
    } else if (root2 < root1) {
      this.root[root1] = root2;
    } else {
      return;
    }
  }

  disjointSet() {
    const map = new Map();
    const vertexLength = this.root.length;

    for (let i = 0; i < vertexLength; i++) {
      const root = this.find(i);
      const child = map.has(root) ? map.get(root) : [];
      child.push(i);
      map.set(root, child);
    }

    return map;
  }
}