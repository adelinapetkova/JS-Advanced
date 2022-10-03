function negativePositiveNumbers(array){
    let newArray=[];

    for(let i of array){
        if(i<0){
            newArray.unshift(i);
        }else{
            newArray.push(i);
        }
    }

    console.log(newArray.join('\n'))
}

negativePositiveNumbers([7, -2, 8, 9])