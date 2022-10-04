function calculator() {
    let element1=null;
    let element2=null;
    let result=null;

    return {
        init,
        add, 
        subtract
    };

    function init(selector1, selector2, resultSelector){
        element1=document.querySelector(selector1);
        element2=document.querySelector(selector2);
        result=document.querySelector(resultSelector);
    }

    function add(){
        result.value=Number(element1.value)+Number(element2.value);
    }

    function subtract(){
        result.value=Number(element1.value)-Number(element2.value);
    }
}

// var calculate = calculator ();

// calculate.init ('#num1', '#num2', '#result');




