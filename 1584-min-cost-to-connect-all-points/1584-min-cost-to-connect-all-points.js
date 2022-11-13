class DSU {
    ranks;
    parents;
    
    constructor(length) {
        this.ranks = new Array(length).fill(1);
        this.parents = Array.from({length}, (_, idx) => idx);
    }
    
    find(x) {
        if (x !== this.parents[x]) {
            this.parents[x] = this.find(this.parents[x]);
        }
        return this.parents[x];
    }
    
    union(x, y) {
        x = this.find(x);
        y = this.find(y);
        
        if (x === y) {
            return false;
        }
        if (this.ranks[x] < this.ranks[y]) {
            [x, y] = [y, x];
        }
        this.ranks[x] += this.ranks[y];
        this.parents[y] = x;
        
        return true;
    }
}

/**
 * @param {number[][]} points
 * @return {number}
 */
function minCostConnectPoints(points) {
    const connections = Array.from(uniqueConnections(points));
    connections.sort((a, b) => a[2] - b[2]);
    const dsu = new DSU(points.length);
    let totalCost = 0;
    for (const [a, b, cost] of connections) {
        if (dsu.union(a, b)) {
            totalCost += cost;
        }
    }
    return totalCost;
}

function* uniqueConnections(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            yield [i, j, dist(arr[i], arr[j])];
        }
    }
}

function dist([x1, y1], [x2, y2]) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}