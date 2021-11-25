const buttonElement = document.querySelector('.search__btn');
const inputElement = document.querySelector('.search__input');

const getInputText = () => {
  console.log(inputElement.value);
};

buttonElement.addEventListener('click', getInputText);
