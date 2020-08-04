const email = document.getElementById('email');
const error = document.getElementById('errorMsg');
const errorIcon = document.getElementById('errorIcon');
const form = document.getElementById('input-form');
const body = document.getElementById('body');

form.addEventListener('submit', e => {
    e.preventDefault();
    const emailValue = email.value;
    if (!validateEmail(emailValue)) {
        error.style.display = 'block';
        errorIcon.style.display = 'block';

    } else {
        body.classList.add('body');
        body.innerHTML = "Thank you for subscribing !!!";
        confetti();
    }
})


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}