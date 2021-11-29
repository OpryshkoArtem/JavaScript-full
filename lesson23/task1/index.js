const emailInputElement = document.querySelector('#email');
const passwordInputElement = document.querySelector('#password');

const emailErrorElement = document.querySelector('.error-text_email');
const passwordErrorElement = document.querySelector('.error-text_password');

const isRequired = value => (value ? undefined : 'Required');
const isEmail = value => (value.includes('@') ? undefined : 'Should be an email');

const validatorsByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators
    .map(validator => validator(value))
    .filter(errorText => errorText)
    .join(', ');
};

const emailChange = event => {
  const errorText = validate('email', event.target.value);
  emailErrorElement.textContent = errorText;
};

const passwordChange = event => {
  const errorText = validate('password', event.target.value);
  passwordErrorElement.textContent = errorText;
};

emailInputElement.addEventListener('input', emailChange);
passwordInputElement.addEventListener('input', passwordChange);

const formElement = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();
  const formData = [...new FormData(formElement)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {},
  );

  alert(JSON.stringify(formData));
};

formElement.addEventListener('submit', onFormSubmit);
