function diagonalSums(matrix){
    let mainDiagonalSum=0;
    let secondaryDiagonalSum=0;

    for (let i=0; i<matrix.length; i++){
        mainDiagonalSum+=matrix[i][i];
        secondaryDiagonalSum+=matrix[i][matrix.length-i-1];
    }

    console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`)
}