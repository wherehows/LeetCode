var minPathSum = function(grid) {
    const height = grid.length;
    const width = grid[0].length;
    
    const map = (new Array(grid.length).fill()).map(e => new Array(grid[0].length).fill());
    
    const minPathFromPoint = (row, column) => {
        if(row>= height || column >= width){
            return Number.MAX_SAFE_INTEGER;
        }
        
        if(map[row][column]) {
            return map[row][column];
        }
        
        if(row === height-1 && column === width-1){
            return grid[row][column];
        }
        
        let current = 0;
        const toRight = minPathFromPoint(row, column+1);
        const toBottom = minPathFromPoint(row+1, column);
    
        let result = Math.min(toRight, toBottom)+grid[row][column];
        
        map[row][column] = result;
        
        return result;
    }
    
    return minPathFromPoint(0,0);
};