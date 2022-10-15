function play(commands){
    function hasWinner(matrix){
        let winner='';
        for (let i=0; i<3; i++){
            if(matrix[i][0]==matrix[i][1] && matrix[i][0]==matrix[i][2]){
                winner=matrix[i][0];
            }else if(matrix[0][i]==matrix[1][i] && matrix[0][i]==matrix[2][i]){
                winner=matrix[0][i];
            }
    
            if(winner!=''){
                break;
            }
        }
    
        if(matrix[0][0]==matrix[1][1] && matrix[0][0]==matrix[2][2]){
            winner=matrix[0][0];
        }else if(matrix[0][2]==matrix[1][1] && matrix[0][2]==matrix[2][0]){
            winner=matrix[0][2];
        }
        
        return winner;
    }
    
    function isFieldFull(matrix){
        let isFieldFull=true;
    
        for(let row=0; row<matrix.length; row++){
            for (let col=0; col<matrix[row].length; col++){
                if(matrix[row][col]==false){
                    isFieldFull=false;
                    break;
                }
            }
    
            if(!isFieldFull){
                break;
            }
        }
    
        return isFieldFull;
    }
    
    let matrix=[
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]
    let player='X';
    for(let command of commands){
        if(isFieldFull(matrix) && hasWinner(matrix)==''){
            console.log("The game ended! Nobody wins :(")
            break;
        }else if(hasWinner(matrix)!=''){
            console.log(`Player ${hasWinner(matrix)} wins!`)
            break;
        }

        let coordinates=command.split(' ');
        let x=coordinates[0];
        let y=coordinates[1];
        x=Number(x);
        y=Number(y);

        if(matrix[x][y]==false){
            matrix[x][y]=player;
            if(player=='X'){
                player='O';
            }else{
                player='X';
            }
        }else{
            console.log("This place is already taken. Please choose another!")
        }
    }

    for (let row of matrix){
        console.log(row.join('\t'));
    }
}

play(["0 1",

"0 0",

"0 2",

"2 0",

"1 0",

"1 2",

"1 1",

"2 1",

"2 2",

"0 0"])
