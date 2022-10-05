function rotateArray(array, rotations){
    let element;
    for(let i=0; i<rotations; i++){
        element=array.pop();
        array.unshift(element);
    }

    console.log(array.join(' '));
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15)