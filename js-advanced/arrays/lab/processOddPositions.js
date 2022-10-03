function processOddPositions(array){
    function doubleNumber(num){
        return num*2;
    }

    let newArray=[];

    for(let i=1; i<array.length; i+=2){
        newArray.push(array[i]);
    }

    return newArray.map(doubleNumber).reverse().join(' ');
}

console.log(processOddPositions([3,0,10,4,7,3]))