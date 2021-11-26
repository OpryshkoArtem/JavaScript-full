const buttonElement = document.querySelector('.single-use-btn');

const logText = e => {
  console.log('clicked');
  buttonElement.removeEventListener('click', logText);
};

buttonElement.addEventListener('click', logText);
