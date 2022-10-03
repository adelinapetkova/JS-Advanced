function solution(){
    let result='';

    function append(text){
        result+=text;
    }

    function removeStart(n){
        result=result.slice(n);
    }

    function removeEnd(n){
        result=result.slice(0,-n);
    }

    function print(){
        console.log(result);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let firstZero = solution();
let secondZero = solution();

firstZero.append('123');
firstZero.append('45');
firstZero.removeStart(2);
firstZero.removeEnd(1);

secondZero.append('hello');
secondZero.append('again');
secondZero.removeStart(3)
secondZero.removeEnd(4)

firstZero.print();
secondZero.print();