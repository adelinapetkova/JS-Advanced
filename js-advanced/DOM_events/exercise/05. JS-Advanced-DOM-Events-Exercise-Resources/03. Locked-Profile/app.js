function lockedProfile() {
    let btns=document.getElementsByTagName('button');
    let profiles=document.getElementsByClassName('profile');

    for(let btn of btns){
        btn.addEventListener('click', showMore);
    }

    function showMore(event){
        let target=event.target;

        let indexOfBtn=[...btns].indexOf(target)+1;
        let nameOfLock='user'+indexOfBtn+'Locked';
        let nameOfHiddenFields='user'+indexOfBtn+'HiddenFields';

        let profileLocks=document.getElementsByName(nameOfLock);

        if(!profileLocks[0].checked){
            if(target.textContent=='Show more'){
                document.getElementById(nameOfHiddenFields).style.display='block';
                target.textContent='Hide it';
            }else{
                document.getElementById(nameOfHiddenFields).style.display='none';
                target.textContent='Show more';
            }
        }

        console.log(document.getElementById(nameOfHiddenFields).style.display)

    }
}