import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
const storageKey = "feedback-form-state";

form.addEventListener('input', throttle(handlerForm, 500));

function handlerForm(evt) {
    const {email, message} = evt.currentTarget.elements;

    const inputs = {
        email: email.value,
        message: message.value
    }

    localStorage.setItem(storageKey, JSON.stringify(inputs));
}

const inputsParse = JSON.parse(localStorage.getItem(storageKey));

form.elements.email.value = inputsParse.email ?? '';
form.elements.message.value = inputsParse.message ?? '';

// Функціонал сабміту

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();
    
    console.log(inputsParse);
    
    evt.currentTarget.reset();
    localStorage.clear();
}

