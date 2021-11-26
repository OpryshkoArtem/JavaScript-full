const buttonsElem = document.querySelectorAll('.btn');

const textOfButton = e => {
  console.log(e.target.textContent);
};

buttonsElem.forEach(button => {
  button.addEventListener('click', textOfButton);
});
