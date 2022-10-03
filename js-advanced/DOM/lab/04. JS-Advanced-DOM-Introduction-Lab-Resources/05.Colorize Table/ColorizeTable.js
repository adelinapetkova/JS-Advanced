function colorize() {
    let lines=document.getElementsByTagName('tr');

    for(let i=1; i<lines.length; i+=2){
        lines[i].style.background='teal';
    }
}