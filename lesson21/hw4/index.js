const setTitle = (text) => {
	const replaceTextInElem = document.querySelector('.title');
	replaceTextInElem.textContent = text;
}

setTitle('Hello W');
