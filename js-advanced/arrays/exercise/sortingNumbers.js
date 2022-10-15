function sortingNumbers(numbers){
    const result=[];
    let element;
    let initialLength=numbers.length;

    for(let i=0; i<initialLength; i++){
        if(i%2==0){
            element=Math.min(...numbers);
        }else{
            element=Math.max(...numbers);
        }

        numbers.splice(numbers.indexOf(element), 1);
        result[i]=element;
    }

    return result;
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))