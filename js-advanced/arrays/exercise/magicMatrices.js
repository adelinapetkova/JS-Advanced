function magicMatrix(matrix){
    let isMagic=true;
    let sum=matrix[0].reduce((partialSum, a) => partialSum + a, 0);

    for (let row=1; row<matrix.length; row++){
        if (sum !=matrix[row].reduce((partialSum, a) => partialSum + a, 0)){
            isMagic=false;
            break;
        }
    }

    if(isMagic){
        for(let col=0; col<matrix[0].length; col++){
            let currentSum=0;
            for (let row=0; row<matrix.length; row++){
                currentSum+=matrix[row][col];
            }

            if(currentSum!=sum){
                isMagic=false;
                break;
            }
        }
    }

    console.log(isMagic);
}

magicMatrix([[1, 0, 0], [0, 0, 1], [0, 1, 0]])