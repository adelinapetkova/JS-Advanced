function extractText() {
    let listItems=document.querySelectorAll('ul#items li');
    let textArea=document.querySelector('#result')
    for(let node of listItems){
        textArea.value+=node.textContent+'\n';
    }
}