function addItem() {
    let newText=document.getElementById('newItemText').value;
    let newValue=document.getElementById('newItemValue').value;

    console.log(newText);
    console.log(newValue);

    let menu=document.getElementById('menu');

    console.log(menu);

    let newOption=document.createElement('option');
    newOption.textContent=newText;
    newOption.value=newValue;

    console.log(newOption);

    menu.appendChild(newOption);

    document.getElementById('newItemText').value='';
    document.getElementById('newItemValue').value='';
}