const inputElement = document.querySelector('.text-input');
const inputText = e => {
  console.log(inputElement.value);
};
inputElement.addEventListener('change', inputText);
