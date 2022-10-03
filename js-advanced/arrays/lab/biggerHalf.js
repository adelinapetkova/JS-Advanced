function biggerHalf(array){
    array.sort((a,b)=>a-b);

    let startIndex=Math.floor(array.length/2);

    let newArray=array.slice(startIndex);

    return newArray;
}

biggerHalf([4,7,2,5])