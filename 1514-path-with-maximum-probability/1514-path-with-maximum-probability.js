const maxProbability = (n, edges, succProb, start, end) => {
    const probs = Array(n).fill(0)
    const pq = PQ( probs )
    const edgeMap = edges.reduce( ( map, [ a, b ], i ) => {
        map[ a ].push( [ b, succProb[i] ] )
        map[ b ].push( [ a, succProb[i] ] )
        return map
    }, Array.from({length:n},() => []) )

    pq.update( start, 1 )

    while ( ! pq.empty() ) {
        const nodeID = pq.takeBest()
        if ( nodeID === end ) return probs[end]
        if ( ! edgeMap[ nodeID ] ) continue

        edgeMap[ nodeID ].forEach( ([ toID, prob ]) => {
            if ( probs[nodeID] * prob > probs[toID] ) {
                pq.update( toID, probs[nodeID] * prob )
            }
        })
    }

    return probs[end]
}

const PQ = ( probs ) => {
    const heap = []
    const vertexMap = probs.reduce( ( obj, prob, i ) => {
        obj[ i ] = i
        heap[ i ] = i
        return obj
    }, {} )
    
    const empty = () => heap.length === 0
    const parent = i => ~~( i / 2 )
    const leftChild = i => i * 2 + 1
    const rightChild = i => i * 2 + 2
    
    const takeBest = () => {
        swap( 0, heap.length - 1 )
        const best = heap.pop()
        
        siftDown( 0 )
        
        return best
    }
    const update = ( vertex, value ) => {
        probs[ vertex ] = value
        
        siftUp( vertexMap[ vertex ] )

    }
    
    const siftDown = ( i ) => {
        const l = leftChild( i )
        const r = rightChild( i )
        const c = ! r ? l : probs[heap[l]] > probs[heap[r]] ? l : r

        if ( c && probs[heap[c]] > probs[heap[i]] ) {
            swap( c, i )
            siftDown( c )
        }
    }
    const siftUp = ( i ) => {
        if ( 0 === i ) return
        const p = parent( i )
        
        if ( probs[heap[p]] < probs[heap[i]] ) {
            swap( p, i )
            siftUp( p )
        }
    }
    const swap = ( i, j ) => {
        const hold = heap[i]
        heap[i] = heap[j]
        heap[j] = hold
        
        vertexMap[heap[i]] = i
        vertexMap[heap[j]] = j
    }
    
    return { empty, takeBest, update }
}