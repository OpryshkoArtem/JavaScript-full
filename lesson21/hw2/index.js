export function getItemsList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}

getItemsList();

export function getItemsArray() {
  const elementArray = document.querySelectorAll('.tool');
  console.dir(elementArray);
	const NodeList = Array.from(elementArray);
  return elementArray;
}

getItemsArray();
