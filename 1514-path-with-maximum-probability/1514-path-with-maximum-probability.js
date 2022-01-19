const maxProbability = (n, edges, succProb, start, end) => {
  const edgeMap = edges.reduce(
    (map, [a, b], i) => {
      map[a].push([b, succProb[i]]);
      map[b].push([a, succProb[i]]);
      return map;
    },
    Array.from({ length: n }, () => [])
  );

  const probs = new Array(n).fill(0);
  const pq = new PriorityQueue();

  pq.enqueue(start, 1);
  probs[start] = 1;

  while (pq.getTotalNumberOfNodes()) {
    const { number, probability } = pq.dequeue();
    if (number === end) return probability;
    if (!edgeMap[number]) continue;

    const nextVertexs = edgeMap[number];

    for (const [vertex, prob] of nextVertexs) {
      if (!probs[vertex] || probs[vertex] < prob * probability) {
        probs[vertex] = prob * probability;
        pq.enqueue(vertex, probability * prob);
      }
    }
  }

  return probs[end];
};

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(number, probability) {
    const newNode = { number, probability };
    this.values.push(newNode);

    if (this.getTotalNumberOfNodes() > 1) {
      this.bubbleUp();
    }
  }

  dequeue() {
    this.swap(0, this.getTotalNumberOfNodes() - 1);
    const res = this.values.pop();

    if (this.getTotalNumberOfNodes() > 1) {
      this.bubbleDown();
    }

    return res;
  }

  getTotalNumberOfNodes() {
    return this.values.length;
  }

  print() {}

  bubbleUp() {
    let childIndex = this.values.length - 1;
    let childPriority = this.values[childIndex].probability;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    let parentPriority = this.values[parentIndex].probability;

    while (true) {
      if (parentPriority < childPriority) {
        this.swap(childIndex, parentIndex);
      } else {
        break;
      }

      childIndex = parentIndex;

      if (childIndex === 0) break;

      parentIndex = Math.floor((childIndex - 1) / 2);
      parentPriority = this.values[parentIndex].probability;
    }
  }

  bubbleDown() {
    let parentIndex = 0;
    let parentPriority = this.values[parentIndex]?.probability;
    let leftChildIndex = parentIndex * 2 + 1;
    let leftChildPriority = this.values[leftChildIndex]?.probability;
    let rightChildIndex = parentIndex * 2 + 2;
    let rightChildPriority = this.values[rightChildIndex]?.probability;

    while (true) {
      let indexToSwap = null;

      if (parentPriority < leftChildPriority) {
        indexToSwap = leftChildIndex;
      }

      if (
        (indexToSwap && leftChildPriority < rightChildPriority) ||
        (!indexToSwap && parentPriority < rightChildPriority)
      ) {
        indexToSwap = rightChildIndex;
      }

      if (!indexToSwap) break;

      this.swap(indexToSwap, parentIndex);

      parentIndex = indexToSwap;
      leftChildIndex = parentIndex * 2 + 1;
      leftChildPriority =
        leftChildIndex <= this.getTotalNumberOfNodes() - 1 &&
        this.values[leftChildIndex].probability;
      rightChildIndex = parentIndex * 2 + 2;
      rightChildPriority =
        rightChildIndex <= this.getTotalNumberOfNodes() - 1 &&
        this.values[rightChildIndex].probability;
    }
  }

  swap(temp1, temp2) {
    [this.values[temp2], this.values[temp1]] = [
      this.values[temp1],
      this.values[temp2],
    ];
  }
}

console.log(
  maxProbability(
    3,
    [
      [0, 1],
      [1, 2],
      [0, 2],
    ],
    [0.5, 0.5, 0.2],
    0,
    2
  )
);

// const node = new PriorityQueue();
// node.enqueue(1, 0);
// node.enqueue(1, 3);
// node.enqueue(1, 2);
// node.enqueue(1, 1);
// node.enqueue(1, 4);

// node.dequeue();
