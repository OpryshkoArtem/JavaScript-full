const checkboxElement = document.querySelector('.task-status');

const checkStatus = e => {
  console.log(checkboxElement.checked);
};

checkboxElement.addEventListener('change', checkStatus);
