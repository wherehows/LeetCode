var widthOfBinaryTree = function(root) {
    const minPos = [0];
    let maxWidth = 0;
    
    callDFS(root, 0, 0);
    return maxWidth;
    
    function callDFS(node, level, pos) {
        if(!node) return;
        if(minPos[level] === undefined) minPos.push(pos);
        
        const diff = pos - minPos[level];
        maxWidth = Math.max(maxWidth, diff+1);
        
        callDFS(node.left, level+1, diff*2);
        callDFS(node.right, level+1, diff*2+1);
    }
};