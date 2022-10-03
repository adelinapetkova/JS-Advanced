function greatestCommonDivisor(a, b){
    let smallNum;
    let bigNum;
    let greatestCommonDivisor;

    if(a>b){
        smallNum=b;
        bigNum=a;
    }else{
        smallNum=a;
        bigNum=b;
    }

    for(let i=1; i<=smallNum; i++){
        if(smallNum%i==0 && bigNum%i==0){
            greatestCommonDivisor=i;
        }
    }

    console.log(greatestCommonDivisor);
}

greatestCommonDivisor(2154, 458)