function deleteByEmail() {
    let emailToDelete=document.querySelector('input').value;
    let result=document.getElementById('result');

    let secondColumn=document.querySelectorAll('#customers tr td:nth-child(2)');

    for(let td of secondColumn){
        if(td.textContent==emailToDelete){
            let row=td.parentNode;
            td.parentNode.parentNode.removeChild(row);
            result.textContent='Deleted.';
            return;
        }
    }

    result.textContent='Not found.';
}