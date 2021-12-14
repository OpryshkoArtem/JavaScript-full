import { renderTasks } from './renderer.js';
import { getTaskList, deleteTask } from './tasksGateway.js';

export const onDeleteTask = e => {
  const taskId = e.target.closest('.list__item').dataset.id;

  deleteTask(taskId).then(getTaskList).then(renderTasks);
};
