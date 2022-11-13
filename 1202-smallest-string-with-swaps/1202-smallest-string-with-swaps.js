function smallestStringWithSwaps(s, pairs) {
    const unionFind = new UnionFind(s.length)
    pairs.forEach(([v1, v2]) => unionFind.union(v1, v2));
    
    const result = [];
    unionFind.disjointSets().forEach((idxs, root) => {
        const chars = idxs.map(idx => s[idx]);
        chars.sort();
        let i = 0;
        idxs.forEach(idx => {
            result[idx] = chars[i++];
        })
    })
    return result.join('');
}

class UnionFind {
    constructor(n) {
        this.root = new Array(n).fill(null).map((x, idx) => idx);
        this.rank = new Array(n).fill(1);
        this.vertexCount = n;
    }
    find(v) {
        if(v === this.root[v]) {
            return v;
        }
        this.root[v] = this.find(this.root[v]);
        return this.root[v];
    }
    union(v1, v2) {
        const r1 = this.find(v1),
              r2 = this.find(v2);
        
        if(r1 === r2) {
            return;
        }
        if(this.rank[r1] > this.rank[r2]) {
            this.root[r2] = r1;
        } else if(this.rank[r1] < this.rank[r2]) {
            this.root[r1] = r2;
        } else {
            this.root[r2] = r1;
            this.rank[r1] += 1;
        }
    }
    disjointSets() {
        const map = new Map();
        for(let i = 0; i < this.vertexCount; ++i) {
            const root = this.find(i);
            const vtx = map.has(root) ? map.get(root) : [];
            vtx.push(i);
            map.set(root, vtx);
        }
        return map;
    }
}