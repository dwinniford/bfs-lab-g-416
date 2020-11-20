function bfs(rootNode, vertices, edges){
    const orderedNodes = []
    let queued = []
    rootNode.distance = 0
    queued.push(rootNode)
    while(queued.length !== 0 ) {
        const currentNode = queued.shift()
        console.log(currentNode)
        const adjacentNodes = findAdjacentNodes(currentNode.name, vertices, edges)
        console.log("adjacentNodes=", adjacentNodes)

        markDistanceAndPredecessor(currentNode, adjacentNodes)
        
        queued = queued.concat(adjacentNodes)
        orderedNodes.push(currentNode)
    };
    return orderedNodes
}

function findAdjacentNodes(rootNode, vertices, edges) {
    const currentNode = vertices.find(v => v.name === rootNode)
    const adjacentNodes = []
    for(const edge of edges) {
        if(edge.includes(rootNode)) {
            for(const vName of edge) {
                if(vName !== rootNode) {
                    for(const vertice of vertices) {
                        if(vertice.name === vName && vertice.distance === null) {
                            adjacentNodes.push(vertice)
                        }
                    }
                }
            }
        }
    }
    return adjacentNodes
}

function markDistanceAndPredecessor(rootNode, adjacentNodes) {
    for(const n of adjacentNodes) {
        n.distance = rootNode.distance + 1
        n.predecessor = rootNode
    }
    return adjacentNodes
}