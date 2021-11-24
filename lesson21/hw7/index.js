export const createButton = buttonText => {
  const bodyElement = document.body;
  const buttonElement = document.createElement('button');
  buttonElement.textContent = buttonText;
  bodyElement.append(buttonElement);
};

// createButton('Send Email');
