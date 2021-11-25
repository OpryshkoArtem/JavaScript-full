export const squaredNumbers = () => {
  const listElements = document.querySelectorAll('.number');
  const listEl = document.querySelector('.number');
  const arrElements = Array.from(listElements);

  for (let i = 0; i < arrElements.length; i += 1) {
    arrElements[i].dataset.squaredNumber =
      arrElements[i].dataset.number * arrElements[i].dataset.number;
  }
};

squaredNumbers();
