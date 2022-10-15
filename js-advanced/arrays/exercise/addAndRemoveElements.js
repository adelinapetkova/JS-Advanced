function addAndRemove(commands){
    let number=1;
    const newArray=[];

    for(let command of commands){
        if(command=='add'){
            newArray.push(number);
        }else{
            newArray.pop()
        }
        number+=1;
    }

    if(newArray.length>0){
        console.log(newArray.join('\n'))
    }else{
        console.log('Empty')
    }
}

addAndRemove(['remove',

'remove',

'remove',])