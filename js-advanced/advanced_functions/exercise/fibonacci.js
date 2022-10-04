function getFibonator(){
    let firstNumber=0;
    let secondNumber=0;
    function fib(){
        let sum=firstNumber+secondNumber;
        if(sum==0){
            sum=1;
        }
        firstNumber=secondNumber;
        secondNumber=sum;
        return sum;
    }

    return fib;
}

let fib = getFibonator();

console.log(fib()); // 1

console.log(fib()); // 1

console.log(fib()); // 2

console.log(fib()); // 3

console.log(fib()); // 5

console.log(fib()); // 8

console.log(fib());

