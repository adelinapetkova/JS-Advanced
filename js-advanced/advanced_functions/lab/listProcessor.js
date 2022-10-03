function listProcessor(arr){
    result=[];

    function add(text){
        result.push(text);
    }

    function remove(text){
        result=result.filter(i => i!==text);
    }

    function print(){
        console.log(result.join(','))
    }

    for(let command of arr){
        let [com, value]=command.split(' ');
        if(com=='add'){
            add(value);
        }else if(com=='remove'){
            remove(value);
        }else if(com=='print'){
            print();
        }
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])