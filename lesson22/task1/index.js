const div = document.querySelector('.rect_div');
const p = document.querySelector('.rect_p');
const span = document.querySelector('.rect_span');

const handler = (text, color) => {
  const divOut = document.querySelector('.events-list');
  divOut.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGreenP = handler.bind(null, 'p', 'green');
const logGreenSpan = handler.bind(null, 'span', 'green');
const logGreenDiv = handler.bind(null, 'div', 'green');

const logGreyDiv = handler.bind(null, 'div', 'grey');
const logGreyP = handler.bind(null, 'p', 'grey');
const logGreySpan = handler.bind(null, 'span', 'grey');

div.addEventListener('click', logGreyDiv, { capture: true });
div.addEventListener('click', logGreenDiv);

p.addEventListener('click', logGreyP, { capture: true });
p.addEventListener('click', logGreenP);

span.addEventListener('click', logGreySpan, { capture: true });
span.addEventListener('click', logGreenSpan);

// BUTTONS
const clearBtn = document.querySelector('.clear-btn');
const removeHandlers = document.querySelector('.remove-handlers-btn');
const attachHandlers = document.querySelector('.attach-handlers-btn');

const clearOutput = () => {
  const divOut = document.querySelector('.events-list');
  divOut.innerHTML = '';
};
clearBtn.addEventListener('click', clearOutput);

const attach = () => {
  div.addEventListener('click', logGreyDiv, { capture: true });
  div.addEventListener('click', logGreenDiv);
  p.addEventListener('click', logGreyP, { capture: true });
  p.addEventListener('click', logGreenP);
  span.addEventListener('click', logGreySpan, { capture: true });
  span.addEventListener('click', logGreenSpan);
};

const remove = () => {
  div.removeEventListener('click', logGreyDiv, { capture: true });
  div.removeEventListener('click', logGreenDiv);
  p.removeEventListener('click', logGreyP, { capture: true });
  p.removeEventListener('click', logGreenP);
  span.removeEventListener('click', logGreySpan, { capture: true });
  span.removeEventListener('click', logGreenSpan);
};

removeHandlers.addEventListener('click', remove);
attachHandlers.addEventListener('click', attach);
