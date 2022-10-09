function focused() {
    let inputSections=document.querySelectorAll('input');

    for(let el of inputSections){
        el.addEventListener('focus', addFocused);
        el.addEventListener('blur', removeFocused);
    }

    function addFocused(event){
        let parent=event.target.parentElement;
        parent.className='focused';
    }

    function removeFocused(event){
        let parent=event.target.parentElement;
        parent.className='';
    }
}