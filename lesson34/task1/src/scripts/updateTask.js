import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTaskList } from './tasksGateway.js';

export const onToggleTask = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) return;

  const taskId = event.target.dataset.id;
  const tasksList = getItem('tasksList');
  const { text, createData } = tasksList.find(task => task.id === taskId);
  const done = event.target.checked;

  const updatedTask = {
    text,
    createData,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTaskList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

// 1. Prepare data
// 2. Updade data in db
// 3. Read new data from server
// 4. save new data to front-end storage
// 5. Update UI based on new data
