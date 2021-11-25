'use strict';

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  // put your code here
  const listElement = document.querySelector('.list');

  const listElementItems = tasksList.map(({ text }) => {
    const listElemItem = document.createElement('li');
    listElemItem.classList.add('list__item');
    const elemCheck = document.createElement('input');
    elemCheck.setAttribute('type', 'checkbox');
    listElemItem.append(elemCheck, text);

    return listElemItem;
  });

  listElement.append(...listElementItems);
};

renderTasks(tasks);
