const checkboxElement = document.querySelector('.task-status');

const checkStatus = () => {
  console.log(checkboxElement.checked);
};

checkboxElement.addEventListener('change', checkStatus);
