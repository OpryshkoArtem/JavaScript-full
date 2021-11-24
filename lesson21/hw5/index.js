export const setButton = buttonText => {
  const elemBody = document.querySelector('body');
  elemBody.innerHTML = `<button>${buttonText}</button>`;
};

// for example
// setButton('rrtt');
