/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const uf = new UnionFind(isConnected);

  for (let i = 0; i < isConnected[0].length; i++) {
    for (let j = 0; j < isConnected.length; j++) {
      if (isConnected[i][j] === 1) uf.union(i, j);
    }
  }

  console.log(new Set(uf.parents));

  return new Set(uf.parents.map((m, i) => uf.find(i))).size;
};

function UnionFind(nodes) {
  this.parents = Array.from({ length: nodes.length }, (_, index) => index);

  this.find = (index) => {
    if (this.parents[index] === index) return index;
    else return this.find(this.parents[index]);
  };

  this.union = (y, x) => {
    this.parents[this.find(y)] = this.find(x);
  };
}
