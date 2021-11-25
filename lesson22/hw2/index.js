const inputElement = document.querySelector('.text-input');
const eventLog = e => {
  console.log(e.target.value);
};
inputElement.addEventListener('change', eventLog);
