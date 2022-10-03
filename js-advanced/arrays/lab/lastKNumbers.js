function lastKNumbersSequence(n, k){
    let newArray=[1];
    
    while(newArray.length<n){
        let newElement=0;
        for(let i=1; i<=k; i++){
            if((newArray.length-i)>=0){
                newElement+=newArray[newArray.length-i];
            }
        }

        newArray.push(newElement);
    }

    return newArray;
}

lastKNumbersSequence(6, 2)