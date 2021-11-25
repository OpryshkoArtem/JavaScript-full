export const manageClasses = () => {
  const firstElement = document.querySelector('.one');
  firstElement.classList.add('selected');

  const secondElement = document.querySelector('.two');
  secondElement.classList.remove('selected');

  const thirdElement = document.querySelector('.three');
  thirdElement.classList.toggle('three_done');

  const fourthElement = document.querySelector('.four');
  if (fourthElement.classList.contains('some-class')) {
    fourthElement.classList.add('another-class');
  }
};

// manageClasses();
