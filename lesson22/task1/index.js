const div = document.querySelector('.rect_div');
const p = document.querySelector('.rect_p');
const span = document.querySelector('.rect_span');
const divOut = document.querySelector('.events-list');

const handler = (text, color) => {
  divOut.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGrayDiv = handler.bind(null, 'div', 'gray');
const logGreenDiv = handler.bind(null, 'div', 'green');
const logGrayP = handler.bind(null, 'p', 'gray');
const logGreenP = handler.bind(null, 'p', 'green');
const logGraySpan = handler.bind(null, 'span', 'gray');
const logGreenSpan = handler.bind(null, 'span', 'green');

div.addEventListener('click', logGrayDiv, { capture: true });
div.addEventListener('click', logGreenDiv);

p.addEventListener('click', logGrayP, { capture: true });
p.addEventListener('click', logGreenP);

span.addEventListener('click', logGraySpan, { capture: true });
span.addEventListener('click', logGreenSpan);

// BUTTONS
const clearBtn = document.querySelector('.clear-btn');
const removeHandlers = document.querySelector('.remove-handlers-btn');
const attachHandlers = document.querySelector('.attach-handlers-btn');

// const clear = () => {
//   divOut.innerHTML = null;
// };

// clearBtn.addEventListener('clack', clear);

const remove = () => {
  div.removeEventListener('click', logGrayDiv, { capture: true });
  div.removeEventListener('click', logGreenDiv);
  p.removeEventListener('click', logGrayP, { capture: true });
  p.removeEventListener('click', logGreenP);
  span.removeEventListener('click', logGraySpan, { capture: true });
  span.removeEventListener('click', logGreenSpan);
};

removeHandlers.addEventListener('click', remove);

const attach = () => {
  div.addEventListener('click', logGrayDiv, { capture: true });
  div.addEventListener('click', logGreenDiv);
  p.addEventListener('click', logGrayP, { capture: true });
  p.addEventListener('click', logGreenP);
  span.addEventListener('click', logGraySpan, { capture: true });
  span.addEventListener('click', logGreenSpan);
};

attachHandlers.addEventListener('click', attach);
