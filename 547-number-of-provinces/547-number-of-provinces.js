/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const uf = new UnionFind(isConnected.length);

  for (let i = 0; i < isConnected.length; i++) {
    for (let j = i; j < isConnected[0].length; j++) {
      if (i === j) continue;
      else if (isConnected[i][j]) uf.union(i, j);
    }
  }

  return new Set(uf.value.filter((val, index) => val === index)).size;

  function UnionFind(nodeCounts) {
    this.value = new Array(nodeCounts).fill(0).map((_, index) => index);
    this.find = (p) => {
      if (this.value[p] === p) return p;
      else return this.find(this.value[p]);
    };
    this.union = (y, x) => {
      const xParent = this.find(x);
      const yParent = this.find(y);

      if (xParent > yParent) this.value[xParent] = yParent;
      else this.value[yParent] = xParent;
    };
  }
};