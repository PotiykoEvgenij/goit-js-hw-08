import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const LOCAL_STORAGE_KEY = 'feedback-form-state';

let feedback = {};

function saveFormFeedback() {
  feedback = {
    email: emailInput.value,
    message: messageInput.value,
  };

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(feedback));
};

form.addEventListener('input', throttle(saveFormFeedback, 500));

function loadFormFeedback() {
  const feedback = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (feedback) {
    emailInput.value = feedback.email;
    messageInput.value = feedback.message;
  }
};

loadFormFeedback();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (emailInput.value === '' || messageInput.value === '') {
    alert('Необхідно заповнити усі поля');
    return;
  };

  const formConsole = {
    email: emailInput.value,
    message: messageInput.value,
  };

    emailInput.value = '';
    messageInput.value = '';
  
    console.log(formConsole);

    localStorage.removeItem('feedback-form-state');
  });

