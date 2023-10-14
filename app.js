//DOM Elements
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const confirmPasswordEl = document.getElementById('confirm-password');
const terms = document.getElementById('terms');
const form = document.getElementById('form');

form.addEventListener('submit',handleForm)

function handleForm(event){
    event.preventDefault()
    validateInput()
}


function validateInput(){
    const name = nameEl.value.trim();  //trim is used to remove whitespaces from both ends (if user enters them)
    const email = emailEl.value.trim();
    const password = passwordEl.value.trim();
    const confirmPassword = confirmPasswordEl.value.trim();

    if(name === ''){
        //display error and add error class
        dealErrorFor(nameEl, 'Name cannot be Empty');
    }else {
        //add success class
        dealSuccessFor(nameEl);
    }
    if(email === ''){
        dealErrorFor(emailEl, 'Email cannot be Empty');
    }else if(!checkEmail(email)){
        dealErrorFor(emailEl, 'Email is not valid')
    }
    else {
        dealSuccessFor(emailEl);
    }

    if(password === ''){
        dealErrorFor(passwordEl, 'Password cannot be Empty');
    }else {
        dealSuccessFor(passwordEl);
    }

    if(confirmPassword === ''){
        dealErrorFor(confirmPasswordEl, 'Confirm Password is required');
    }else if(password !== confirmPassword){
        dealErrorFor(confirmPasswordEl, `Password didn't match`);
    }else {
        dealSuccessFor(confirmPasswordEl);
    }

    if(!terms.checked){
        document.querySelector('.tnc').style.color = 'red';
    }else {
        document.querySelector('.tnc').style.color = 'black';
    }
}

function dealErrorFor(element, message){
    const row = element.parentElement;
    const small = row.querySelector('small');

    row.className = 'row error';
    small.innerText = message;
}

function dealSuccessFor(input){
    const row = input.parentElement;
    row.className = 'row success';
}

function checkEmail(email){
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
}