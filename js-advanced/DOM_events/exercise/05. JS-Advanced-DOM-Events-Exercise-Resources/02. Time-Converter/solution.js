function attachEventsListeners() {
    let convertBtns=document.querySelectorAll('input[type=button]');
    let inputFields=document.querySelectorAll('input[type=text]');

    for(let btn of convertBtns){
        btn.addEventListener('click', convert);
    }

    function convert(event){
        let target=event.target;

        let days=0;
        let hours=0;
        let minutes=0;
        let seconds=0;

        if(target.id=='daysBtn'){
            days=Number(inputFields[0].value);
        }else if(target.id=='hoursBtn'){
            days=Number(inputFields[1].value)/24;
        }else if(target.id=='minutesBtn'){
            days=Number(inputFields[2].value)/1440;
        }else if(target.id=='secondsBtn'){
            days=Number(inputFields[3].value)/86400;
        }

        hours=days*24;
        minutes=days*1440;
        seconds=days*86400;

        inputFields[0].value=days;
        inputFields[1].value=hours;
        inputFields[2].value=minutes;
        inputFields[3].value=seconds;
    }
}