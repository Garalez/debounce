'use strict';

const body = document.querySelector('body');
const wrapper = document.createElement('div');
const input = document.createElement('input');
const text = document.createElement('p');

wrapper.append(input, text);
body.append(wrapper);

wrapper.style.display = 'flex';
wrapper.style.justifyContent = 'center';
wrapper.style.alignItems = 'center';
wrapper.style.flexDirection = 'column';
wrapper.style.height = '100vh';

input.style.height = '35px';
input.style.fontSize = '20px';

text.style.fontSize = '25px';

let debounceTimer;

const debounce = (callback, time) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(callback, time);
};

const inputToParagraph = () => {
  text.textContent = input.value;
};

input.addEventListener('input', () => {
  debounce(inputToParagraph, 300);
});

