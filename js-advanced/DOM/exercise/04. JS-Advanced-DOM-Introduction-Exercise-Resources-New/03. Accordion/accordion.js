function toggle() {
    let buttonValue=document.getElementsByClassName('button')[0].textContent;

    if(buttonValue=='More'){
        document.getElementById('extra').style.display='block';
        document.getElementsByClassName('button')[0].textContent='Less';
    }else{
        document.getElementById('extra').style.display='none';
        document.getElementsByClassName('button')[0].textContent='More';
    }
}