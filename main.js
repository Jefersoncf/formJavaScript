let id = (id) => document.getElementById(id);
let classe = (classe) => document.getElementsByClassName(classe);

let username = id('username'),
email = id('email'),
password = id('password'),
form = id('form'),

errorMessage = classe('error'),
successIcon = classe('bx-message-check'),
iconError = classe('bxs-message-error');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    eng(username, 0, 'Username cannot be blank');
    eng(email, 1, 'Email cannot be blank');
    eng(password, 2, 'Password cannot be blank');
});

let eng = (id, serial, message) => {
    if(id.value.trim() === '') {
        errorMsg[serial].innerHTML = message;
        id.style.border = '2px solid red';
        //icons
        iconError[serial].style.opacity = '1';
        successIcon[serial].style.opacity = '0';
    }else {
        errorMsg[serial].innerHTML = '';
        id.style.border = '2px solid green';
        //icons
        errorMsg[serial].style.opacity = '0';
        successIcon[serial].style.opacity = '1';
    }
}