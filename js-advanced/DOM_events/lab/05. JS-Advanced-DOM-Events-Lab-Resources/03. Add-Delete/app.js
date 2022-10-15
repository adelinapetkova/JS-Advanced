function addItem() {
    let newText=document.getElementById('newItemText').value;
    let list=document.getElementById('items');

    let listItem=document.createElement('li');
    listItem.textContent=newText;

    let remove=document.createElement('a');
    let linkText=document.createTextNode("[Delete]")

    remove.appendChild(linkText);
    remove.href='#'

    remove.addEventListener('click', onClickDelete);


    listItem.appendChild(remove);

    list.appendChild(listItem);

    newText.value='';

    function onClickDelete(ev){
        listItem.remove()
    }
}