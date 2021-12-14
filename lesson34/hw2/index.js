const baseUrl = 'https://61b8210264e4a10017d18dc6.mockapi.io/api/v1/users';

const formElem = document.querySelector('.login-form');
const submitBtnElem = document.querySelector('.submit-button');
const nameInputElem = document.querySelector('[name="name"]');

const onInputChange = event => {
  const isValidForm = formElem.reportValidity();
  if (isValidForm) {
    submitBtnElem.removeAttribute('disabled');
  } else {
    submitBtnElem.setAttribute('disabled', true);
  }
};

const dataSave = data => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });
};

const formSubmit = event => {
  event.preventDefault();

  const formData = [...new FormData(formElem)].reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value }),
    {},
  );

  dataSave(formData)
    .then(response => response.json())
    .then(data => {
      alert(JSON.stringify(data));
      formElem.reset();
    });
};

formElem.addEventListener('input', onInputChange);
formElem.addEventListener('submit', formSubmit);
