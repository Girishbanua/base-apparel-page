const emailInput = document.getElementById('emailInput');
const submitButton = document.getElementById('submitButton');
const errorIcon = document.getElementById('errorIcon');
const validIcon = document.getElementById('validIcon');
const errorMessage = document.getElementById('errorMessage');
const validEmailFormat = /^[A-Za-z0-9][\w+]*@[A-Za-z0-9]{3,}\.[A-Za-z]{2,}$/i;
let timesClicked = 0;

function validateEmailAddress() {
    const submittedEmailAddress = emailInput.value;
    // test email is valid via regex
    const isValidEmailAddress = validEmailFormat.test(submittedEmailAddress);

    if (submittedEmailAddress.length === 0) {
        console.log('email required');
        emailInput.classList.add('error-outline');
        errorIcon.style.display = 'block';
        errorMessage.style.display = 'block';
        validIcon.style.display = 'none';        
        // return false;
    } else if (!isValidEmailAddress) {
        console.log('email not valid');
        errorIcon.style.display = 'block';
        errorMessage.style.display = 'block';
        validIcon.style.display = 'none';        
        // return false;
    } else {
        console.log('valid email id');
        emailInput.classList.add('valid-outline');
        emailInput.classList.remove('error-outline');
        emailInput.style.border = 'none';
        errorIcon.style.display = 'none';
        validIcon.style.display = 'block';
        errorMessage.style.display = 'none';
        // return true;
    }
}

submitButton.onclick = () => {

    validateEmailAddress();
   
}  // action takes place when the submit button is clicked