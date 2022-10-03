function sameNumbers(number){
    number=String(number);
    let allDigitsAreTheSame=true;
    let firstDigit=number.charAt(0);
    let sumDigits=Number(firstDigit);

    for(let i=1; i<number.length; i++){
        sumDigits+=Number(number.charAt(i));
        if(number.charAt(i)!=firstDigit){
            allDigitsAreTheSame=false;
        }
    }

    console.log(allDigitsAreTheSame);
    console.log(sumDigits);
}

sameNumbers(1234);