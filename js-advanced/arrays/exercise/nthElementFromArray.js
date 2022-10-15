function nthElementOfArray(array, step){
    const newArray=[];

    for(let i=0; i<array.length; i+=step){
        newArray.push(array[i])
    }

    return newArray;
}

console.log(nthElementOfArray(['5',

'20',

'31',

'4',

'20'],

2))