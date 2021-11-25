export const finishForm = () => {
  const inputForm = document.querySelector('.login-form');
  const inputElemLogin = document.createElement('input');
  inputElemLogin.setAttribute('type', 'text');
  inputElemLogin.setAttribute('name', 'login');
  inputForm.prepend(inputElemLogin);

  const inputElemPass = document.querySelector('input[name = "password"]');
  inputElemPass.setAttribute('type', 'password');
};

// finishForm();
