export const getSection = num => {
  const spanData = document.querySelector(`span[data-number="${num}"]`);
  return spanData.closest('.box').dataset.section;
};

getSection();
