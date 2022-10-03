function equalNeighbors(matrix){
    let equalPairs=0;
    for(let row=0; row<matrix.length; row++){
        for(let col=0; col<matrix[row].length; col++){
            if(col+1<matrix[row].length){
                if(matrix[row][col]===matrix[row][col+1]){
                    equalPairs+=1;
                }
            }

            if(row+1<matrix.length){
                if(matrix[row][col]===matrix[row+1][col]){
                    equalPairs+=1;
                }
            }
            
        }
    }

    return equalPairs;
}

console.log(equalNeighbors([
    ['test', 'yes', 'yo', 'ho'], 
    ['well', 'done', 'yo', '6'], 
    ['not', 'done', 'yet', '5']
]))