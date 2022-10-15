function validate() {
    function isLetter(str) {
        return str.length === 1 && str.match(/[a-zA-Z]/i);
    }

    let company = document.getElementById('company');
    let companyInfo = document.getElementById('companyInfo');
    let submitButton = document.getElementById('submit');

    company.addEventListener('change', () => {
        if (company.checked) {
            companyInfo.style.display = 'block'
        } else {
            companyInfo.style.display = 'none'
        }
    });

    submitButton.addEventListener('click', validateInput);

    function validateInput(ev) {
        ev.preventDefault()

        let username = document.getElementById('username');
        let email = document.getElementById('email');
        let password = document.getElementById('password');
        let confirmPassword = document.getElementById('confirm-password');

        let areAllValid;

        // username
        let name = username.value;
        let isValidName = true;
        for (let l of name) {
            if (!(isLetter(l) || !isNaN(l))) {
                isValidName = false;
                break;
            }
        }
        if (!(name.length >= 3 && name.length <= 20)) {
            isValidName = false;
        }

        if (isValidName) {
            username.style.border = 'none'
        } else {
            username.style.borderColor = 'red'
        }

        // email
        let emailValue = email.value;
        let isValidEmail = true;
        let emailRegEx = /^[^@.]+@[^@]+\.[^@]+$/;

        if (!(emailRegEx.test(emailValue))) {
            isValidEmail = false;
        }

        if (emailValue.length == 0) {
            isValidEmail = false;
        }

        if (isValidEmail) {
            email.style.border = 'none'
        } else {
            email.style.borderColor = 'red'
        }

        // password
        let passValue = password.value;
        let isValidPass = true;
        for (let l of passValue) {
            if (!(isLetter(l) || !isNaN(l) || l == '_')) {
                isValidPass = false;
            }
        }

        if (!(passValue.length >= 5 && passValue.length <= 15)) {
            isValidPass = false;
        }

        // confirm-password
        let confirmPassValue = confirmPassword.value;
        let isValidConfirmPass = true;

        for (let l of confirmPassValue) {
            if (!(isLetter(l) || !isNaN(l) || l == '_')) {
                isValidConfirmPass = false;
            }
        }

        if (!(confirmPassValue.length >= 5 && confirmPassValue.length <= 15)) {
            isValidConfirmPass = false;
        }

        // check if passwords match
        if(passValue!=confirmPassValue){
            isValidPass=false;
            isValidConfirmPass=false;
        }

        if (isValidPass) {
            password.style.border = 'none'
        } else {
            password.style.borderColor = 'red'
        }

        if (isValidConfirmPass) {
            confirmPassword.style.border = 'none'
        } else {
            confirmPassword.style.borderColor = 'red'
        }

        // company info
        let companyNumber = document.getElementById('companyNumber');
        let isValidCompanyNumber = true;

        if (companyInfo.style.display == 'block') {
            let number = companyNumber.value;
            if (!(Number(number) >= 1000 && Number(number) <= 9999)) {
                isValidCompanyNumber = false;
            }

            if(number.length==0){
                isValidCompanyNumber=false;
            }

            if(!isValidCompanyNumber){
                companyNumber.style.borderColor='red'
            }else{
                companyNumber.style.border='none'
            }
        }

        areAllValid = isValidName && isValidPass && isValidConfirmPass && isValidEmail && isValidCompanyNumber;
        if (areAllValid && passValue == confirmPassValue) {
            document.querySelector('#valid').style.display = 'block'
        } else {
            document.querySelector('#valid').style.display = 'none'
        }

    }


}
