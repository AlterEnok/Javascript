const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const eventsListElem = document.querySelector('.events-list');
const clearButton = document.querySelector('.clear-btn');
const attachButton = document.querySelector('.attach-btn');
const removeButton = document.querySelector('.remove-btn');

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

divElem.addEventListener('click', logGreenDiv);
pElem.addEventListener('click', logGreenP);
spanElem.addEventListener('click', logGreenSpan);

clearButton.addEventListener('click', () => {
  eventsListElem.innerHTML = '';
});

attachButton.addEventListener('click', () => {
  divElem.addEventListener('click', logGreenDiv);
  pElem.addEventListener('click', logGreenP);
  spanElem.addEventListener('click', logGreenSpan);
});

removeButton.addEventListener('click', () => {
  divElem.removeEventListener('click', logGreenDiv);
  pElem.removeEventListener('click', logGreenP);
  spanElem.removeEventListener('click', logGreenSpan);
});
