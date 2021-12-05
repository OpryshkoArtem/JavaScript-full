const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterCange = event => {
  const isButton = event.target.classList.contains('counter__btn');
  if (!isButton) {
    return;
  }

  const { action } = event.target.dataset;

  const oldValue = Number(counterValueElem.textContent);

  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;

  localStorage.setItem('counterValue', newValue);

  counterValueElem.textContent = newValue;
};

counterElem.addEventListener('click', onCounterCange);

const onStorageChange = event => {
  counterValueElem.textContent = event.newValue;
};

window.addEventListener('storage', onStorageChange);

const onDocLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
};

document.addEventListener('DOMContentLoaded', onDocLoaded);
