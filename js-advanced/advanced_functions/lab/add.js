function solution(number){
    function add(n){
        return number+n;
    }

    return add;
}

let add5 = solution(5);

console.log(add5(2));

console.log(add5(3));