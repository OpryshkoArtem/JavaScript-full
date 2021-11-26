const input = document.querySelector('.text-input');

const logText = e => {
  console.log(e.target.value);
};
input.addEventListener('change', logText);
