document.addEventListener('DOMContentLoaded', () => {
  const divElem = document.querySelector('.rect_div');
  const pElem = document.querySelector('.rect_p');
  const spanElem = document.querySelector('.rect_span');

  const eventsListElem = document.querySelector('.events-list');
  const clearButton = document.querySelector('.clear-btn');
  const attachButton = document.querySelector('.attach-handlers-btn');
  const removeButton = document.querySelector('.remove-handlers-btn');

  let greenDivCounter = 0;
  let greyDivCounter = 0;
  let greenPCounter = 0;
  let greyPCounter = 0;
  let greenSpanCounter = 0;
  let greySpanCounter = 0;

  const logTarget = (target, color) => {
    const span = document.createElement('span');
    span.style.color = color;
    span.style.marginLeft = '8px';
    span.textContent = target;
    eventsListElem.appendChild(span);
  };

  clearButton.addEventListener('click', () => {
    eventsListElem.innerHTML = '';
  });

  attachButton.addEventListener('click', () => {
    divElem.addEventListener('click', () => {
      greenDivCounter++;
      greyDivCounter++;
      logTarget('div', 'green');
      logTarget('div', 'grey');
      if (greenDivCounter === 2) {
        divElem.removeEventListener('click', logGreenDiv);
      }
      if (greyDivCounter === 2) {
        divElem.removeEventListener('click', logGreyDiv, true);
      }
    });

    pElem.addEventListener('click', () => {
      greenPCounter++;
      greyPCounter++;
      logTarget('p', 'green');
      logTarget('p', 'grey');
      if (greenPCounter === 4) {
        pElem.removeEventListener('click', logGreenP);
      }
      if (greyPCounter === 4) {
        pElem.removeEventListener('click', logGreyP, true);
      }
    });

    spanElem.addEventListener('click', () => {
      greenSpanCounter++;
      greySpanCounter++;
      logTarget('span', 'green');
      logTarget('span', 'grey');
      if (greenSpanCounter === 6) {
        spanElem.removeEventListener('click', logGreenSpan);
      }
      if (greySpanCounter === 6) {
        spanElem.removeEventListener('click', logGreySpan, true);
      }
    });
  });

  removeButton.addEventListener('click', () => {
    divElem.removeEventListener('click', logGreenDiv);
    divElem.removeEventListener('click', logGreyDiv, true);
    pElem.removeEventListener('click', logGreenP);
    pElem.removeEventListener('click', logGreyP, true);
    spanElem.removeEventListener('click', logGreenSpan);
    spanElem.removeEventListener('click', logGreySpan, true);
  });
});
