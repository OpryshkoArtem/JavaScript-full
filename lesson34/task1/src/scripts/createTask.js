import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTaskList } from './tasksGateway.js';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;

  if (!text) return;

  taskTitleInputElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  createTask(newTask)
    .then(() => getTaskList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};

// 1. Готуємо дані
// 2. Записуємо данні в базу данних
// 3. Зразу потрібно зчитати нові обновленні дані з сервера, щоб синхронізуватися і отримувати актуальну інформацію
// 4. Зберегти ці нові данні на клієнті
// 5. Зробити щось з цими новими даними
