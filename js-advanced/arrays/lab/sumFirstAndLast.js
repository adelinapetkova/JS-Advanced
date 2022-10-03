function sumFirstAndLast(numbers){
    let firstElement=numbers.shift();
    let lastElement=numbers.pop();

    return Number(firstElement)+Number(lastElement);
}

console.log(sumFirstAndLast(['5', '10']))