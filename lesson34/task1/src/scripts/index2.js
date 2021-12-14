const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const createCheckboxElem = done => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');

  return checkboxElem;
};

const listElem = document.querySelector('.list');
const renderListItems = listItems => {
  const listItemElements = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const checkboxElem = createCheckboxElem(done);
      listItemElem.append(checkboxElem, text);

      return listItemElem;
    });

  listElem.append(...listItemElements);
};

renderListItems(tasks);

// put your code here

const createBtn = document.querySelector('.create-task-btn');
const inputElem = document.querySelector('.task-input');

function createElementLi() {
  if (inputElem.value === '') return;

  const liElem = document.createElement('li');
  liElem.classList.add('list__item');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('list__item-checkbox');
  liElem.append(checkbox, inputElem.value);
  inputElem.value = '';
  listElem.append(liElem);
  // eslint-disable-next-line consistent-return
  return listElem;
}

createBtn.addEventListener('click', createElementLi);

listElem.addEventListener(
  'click',
  function (event) {
    if (event.target.tagName === 'INPUT') {
      event.target.closest('.list__item').classList.toggle('list__item_done');
    }
  },
  false,
);
