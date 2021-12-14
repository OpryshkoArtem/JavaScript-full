import { onCreateTask } from './createTask.js';
import { onToggleTask } from './updateTask.js';
import { onDeleteTask } from './deleteTask.js';

const handleListClicks = e => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');

  if (isCheckbox) {
    onToggleTask(e);
    return;
  }

  const isDeleteBtn = e.target.classList.contains('list__item-delete-btn');

  if (isDeleteBtn) {
    onDeleteTask(e);
  }
};

export const initTodoListHandlers = () => {
  const buttonElem = document.querySelector('.create-task-btn');
  buttonElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', handleListClicks);
};
