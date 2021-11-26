const checkbox = document.querySelector('.task-status');

const checked = e => {
  console.log(e.target.checked);
};

checkbox.addEventListener('change', checked);
