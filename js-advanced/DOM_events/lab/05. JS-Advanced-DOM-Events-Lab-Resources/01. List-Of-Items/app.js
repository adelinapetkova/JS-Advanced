function addItem() {
    const newText=document.getElementById('newItemText');

    const newElement=document.createElement('li');
    newElement.textContent=newText.value;

    document.getElementById('items').appendChild(newElement);

    newText.value='';
}