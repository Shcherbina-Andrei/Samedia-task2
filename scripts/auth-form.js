import { login } from './auth-fetch.js';
import {
  removeElement,
  replaceElementContent,
  toggleFormActivity,
} from './dom-operations.js';
import { addSuccessMessage, addErrorMessage, loader } from './templates.js';

const authForm = document.getElementById('auth-form');
const title = document.querySelector('.authorization__title');
const submitButton = document.querySelector('.authorization__button');
let error;

const handleSubmitForm = (evt) => {
  evt.preventDefault();

  replaceElementContent(submitButton, loader);
  removeElement(error);

  const authData = new FormData(evt.target);
  toggleFormActivity(authForm, true);

  login(authData.get('user'), authData.get('password'))
    .then(({ name }) => {
      replaceElementContent(title, 'Добро пожаловать!')
      authForm.replaceWith(addSuccessMessage(name));
    })
    .catch((err) => {
      error = addErrorMessage(err.message);
      submitButton.before(error);
    })
    .finally(() => {
      toggleFormActivity(authForm, false);
      replaceElementContent(submitButton, 'Войти');
    });
};

authForm.addEventListener('submit', handleSubmitForm);
