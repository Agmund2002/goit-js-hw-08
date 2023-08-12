import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form')
const storageKey = "feedback-form-state";

const data = JSON.parse(localStorage.getItem(storageKey));

if (data) {
    form.elements.email.value = data.email;
    form.elements.message.value = data.message;
    } 

form.addEventListener('input', throttle(handlerForm, 500));

function handlerForm() {
    const {email, message} = form.elements;
    
    const inputs = {
        email: email.value,
        message: message.value
    }
    
    localStorage.setItem(storageKey, JSON.stringify(inputs))
}

// Функціонал сабміту

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evt) {
    evt.preventDefault();
    
    console.log(JSON.parse(localStorage.getItem(storageKey)));
    
    evt.currentTarget.reset();
    localStorage.clear();
}
