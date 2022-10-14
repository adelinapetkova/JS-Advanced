function validate() {
    let emailInput=document.getElementById('email');;
    emailInput.addEventListener('change', validateEmail)

    function validateEmail(event){
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value))){
            emailInput.className='error';
        }else{
            emailInput.className='';
        }
    }
}