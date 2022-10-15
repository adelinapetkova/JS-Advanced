function extract(array){
    const result=[array[0]];

    let biggestValue;

    for(let i=1; i< array.length; i++){
        biggestValue=result[result.length-1];
        if(array[i]>=biggestValue){
            result.push(array[i])
        }
    }


    return result;
}

console.log(extract([20, 3, 2, 15, 6, 1]))