export const finishList = () => {
  const listElement = document.querySelector('.list');
  const liElement = document.querySelector('.special');
  const firstElement = document.createElement('li');
  firstElement.textContent = 1;
  listElement.prepend(firstElement);
  const eighthElement = document.createElement('li');
  eighthElement.textContent = 8;
  listElement.append(eighthElement);
  const fourthElement = document.createElement('li');
  fourthElement.textContent = 4;
  liElement.before(fourthElement);
  const sixthElement = document.createElement('li');
  sixthElement.textContent = 6;
  liElement.after(sixthElement);
};

// finishList();
