document.addEventListener('DOMContentLoaded', () => {
  const divElem = document.querySelector('.rect_div');
  const pElem = document.querySelector('.rect_p');
  const spanElem = document.querySelector('.rect_span');

  const eventsListElem = document.querySelector('.events-list');
  const clearButton = document.querySelector('.clear-btn');
  const attachButton = document.querySelector('.attach-handlers-btn');
  const removeButton = document.querySelector('.remove-handlers-btn');

  const logTarget = (text, color) => {
    const span = document.createElement('span');
    span.style.color = color;
    span.style.marginLeft = '8px';
    span.textContent = text;
    eventsListElem.appendChild(span);
  };

  const logGrayDiv = logTarget.bind(null, 'div', 'grey');
  const logGreenDiv = logTarget.bind(null, 'div', 'green');
  const logGrayP = logTarget.bind(null, 'p', 'grey');
  const logGreenP = logTarget.bind(null, 'p', 'green');
  const logGraySpan = logTarget.bind(null, 'span', 'grey');
  const logGreenSpan = logTarget.bind(null, 'span', 'green');

  clearButton.addEventListener('click', () => {
    eventsListElem.innerHTML = '';
  });

  attachButton.addEventListener('click', () => {
    divElem.addEventListener('click', logGreenDiv);
    divElem.addEventListener('click', logGrayDiv, true);

    pElem.addEventListener('click', logGreenP);
    pElem.addEventListener('click', logGrayP, true);
    pElem.addEventListener('click', logGrayP, true);
    pElem.addEventListener('click', logGrayP, true);

    spanElem.addEventListener('click', logGreenSpan);
    spanElem.addEventListener('click', logGraySpan, true);
    spanElem.addEventListener('click', logGraySpan, true);
    spanElem.addEventListener('click', logGraySpan, true);
    spanElem.addEventListener('click', logGraySpan, true);
    spanElem.addEventListener('click', logGraySpan, true);
  });

  removeButton.addEventListener('click', () => {
    divElem.removeEventListener('click', logGreenDiv);
    divElem.removeEventListener('click', logGrayDiv, true);

    pElem.removeEventListener('click', logGreenP);
    pElem.removeEventListener('click', logGrayP, true);
    pElem.removeEventListener('click', logGrayP, true);
    pElem.removeEventListener('click', logGrayP, true);

    spanElem.removeEventListener('click', logGreenSpan);
    spanElem.removeEventListener('click', logGraySpan, true);
    spanElem.removeEventListener('click', logGraySpan, true);
    spanElem.removeEventListener('click', logGraySpan, true);
    spanElem.removeEventListener('click', logGraySpan, true);
    spanElem.removeEventListener('click', logGraySpan, true);
  });
});
