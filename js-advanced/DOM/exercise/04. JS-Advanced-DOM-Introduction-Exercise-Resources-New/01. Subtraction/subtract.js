function subtract() {
    const firstNumber=Number(document.getElementById('firstNumber').value);
    const secondNumber=Number(document.getElementById('secondNumber').value);

    let result=firstNumber-secondNumber;
    document.getElementById('result').textContent=result;
}