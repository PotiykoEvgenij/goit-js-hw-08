import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const LOCAL_STORAGE_KEY = 'feedback-form-state';

const throttleSaveFormFeedback = throttle(saveFormFeedback, 500);

emailInput.addEventListener('input', throttleSaveFormFeedback);
messageInput.addEventListener('input', throttleSaveFormFeedback);

const saveFormFeedback = () => {
    const feedback = {
        email: emailInput.value,
        message: messageInput.value,
    };
    
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(feedback));
};

const loadFormFeedback = () => {
    const feedback = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (feedback) {
        emailInput.value = feedback.email;
        messageInput.value = feedback.message;
    }
};

loadFormFeedback();

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formConsole = {
        email: emailInput.value,
        message: messageInput.value,
    }
    
    console.log(formConsole);

    emailInput.value = '';
    messageInput.value = '';    
});