const buttons = document.querySelectorAll('.pagination__page');

const handleClick = event => {
  console.log(event.target.dataset.pageNumber);
};

buttons.forEach(btn => {
  btn.addEventListener('click', handleClick);
});
