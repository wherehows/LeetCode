var findCircleNum = function(M) {
  
    class UnionFind {
        constructor(n) {
            this.graph = [...Array(n)].map((_, i) => i);
            this.groups = n;
        }
        
        find(id) {
            if(this.graph[id] === id) return id;
            this.graph[id] = this.find(this.graph[id]);
            return this.graph[id];
        }
        
        union(x, y) {
            const rootX = this.find(x);
            const rootY = this.find(y);
            if(rootX !== rootY) {
                this.graph[rootY] = rootX;
                this.groups--;
            }
        }
    }

    const N = M.length, unionfind = new UnionFind(N);
    
    for(let r = 0; r < N; r++) {
        for(let c = 0; c < N; c++) {
            if(M[r][c]) unionfind.union(r, c);
        }
    }
    return unionfind.groups;
};