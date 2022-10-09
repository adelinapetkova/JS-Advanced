function attachGradientEvents() {
    let box=document.getElementById('gradient');
    box.addEventListener('mousemove', showPercentage);
    box.addEventListener('mouseout', hidePercentage)

    function showPercentage(ev){
        let element=ev.target;
        let percentage=Math.floor((ev.offsetX/(element.clientWidth-1))*100);
        document.getElementById('result').textContent=percentage+'%';
    }

    function hidePercentage(ev){
        document.getElementById('result').textContent='';
    }
}