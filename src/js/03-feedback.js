import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const parsedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

populateTextarea();

form.addEventListener('submit', onFormSubmit);
textarea.addEventListener('input', throttle(onTextareaInput, 500));
input.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function onTextareaInput(e) {
  formData[e.target.name] = e.target.value;
  return localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  if (parsedData) {
    const formKeys = Object.keys(parsedData);
    formKeys.map(element => {
      document.querySelector(`[name='${element}']`).value = parsedData[element];
    });
  }
}
