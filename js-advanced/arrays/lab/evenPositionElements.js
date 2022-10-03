function evenPositionElements(array){
    let evenPositionElements=[];
    for(let i=0; i<array.length; i+=2){
        evenPositionElements.push(array[i])
    }

    console.log(evenPositionElements.join(' '))

}

evenPositionElements(['5', '10'])