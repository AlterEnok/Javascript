const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const eventsListElem = document.querySelector('.events-list');

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

divElem.addEventListener('click', logGreenDiv, true);
pElem.addEventListener('click', logGreenP, true);
spanElem.addEventListener('click', logGreenSpan, true);

const clearButton = document.querySelector('.clear-btn');
clearButton.addEventListener('click', () => {
  eventsListElem.innerHTML = '';
});

const removeHandlersButton = document.querySelector('.remove-handlers-btn');
removeHandlersButton.addEventListener('click', () => {
  divElem.removeEventListener('click', logGreenDiv, true);
  pElem.removeEventListener('click', logGreenP, true);
  spanElem.removeEventListener('click', logGreenSpan, true);
});

const attachHandlersButton = document.querySelector('.attach-handlers-btn');
attachHandlersButton.addEventListener('click', () => {
  divElem.addEventListener('click', logGreenDiv, true);
  pElem.addEventListener('click', logGreenP, true);
  spanElem.addEventListener('click', logGreenSpan, true);
});
