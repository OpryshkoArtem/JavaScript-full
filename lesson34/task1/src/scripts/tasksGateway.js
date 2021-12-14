const baseUrl = 'https://61b8210264e4a10017d18dc6.mockapi.io/api/v1/tasks';

export const createTask = taskData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });

export const updateTask = (taskId, updatedtaskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedtaskData),
  });

export const deleteTask = taskId =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });

const mapTasks = tasks => tasks.map(({ _id, ...rest }) => ({ id: _id, ...rest }));

export const getTaskList = () =>
  fetch(baseUrl)
    .then(response => response.json())
    .then(mapTasks);
