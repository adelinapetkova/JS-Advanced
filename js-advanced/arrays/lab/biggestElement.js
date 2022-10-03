function biggestElement(matrix){
    let biggestNumber=matrix[0][0];
    for(let row of matrix){
        for(let element of row){
            if(element>biggestNumber){
                biggestNumber=element;
            }
        }
    }

    return biggestNumber;
}

console.log(biggestElement([
    [3, 5, 7, 12], 
    [-1, 4, 33, 2], 
    [8, 3, 0, 4]
]))