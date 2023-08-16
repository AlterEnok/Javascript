document.addEventListener('DOMContentLoaded', () => {
  const divElem = document.querySelector('.rect_div');
  const pElem = document.querySelector('.rect_p');
  const spanElem = document.querySelector('.rect_span');

  const eventsListElem = document.querySelector('.events-list');
  const clearButton = document.querySelector('.clear-btn');
  const attachButton = document.querySelector('.attach-handlers-btn');
  const removeButton = document.querySelector('.remove-handlers-btn');

  const logTarget = (event, color) => {
    const target = event.target.tagName.toLowerCase();
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
    divElem.addEventListener('click', (event) => logTarget(event, 'green'));
    divElem.addEventListener(
      'click',
      (event) => logTarget(event, 'grey'),
      true
    );

    pElem.addEventListener('click', (event) => logTarget(event, 'green'));
    pElem.addEventListener('click', (event) => logTarget(event, 'grey'), true);

    spanElem.addEventListener('click', (event) => logTarget(event, 'green'));
    spanElem.addEventListener(
      'click',
      (event) => logTarget(event, 'grey'),
      true
    );
  });

  removeButton.addEventListener('click', () => {
    divElem.removeEventListener('click', (event) => logTarget(event, 'green'));
    divElem.removeEventListener(
      'click',
      (event) => logTarget(event, 'grey'),
      true
    );

    pElem.removeEventListener('click', (event) => logTarget(event, 'green'));
    pElem.removeEventListener(
      'click',
      (event) => logTarget(event, 'grey'),
      true
    );

    spanElem.removeEventListener('click', (event) => logTarget(event, 'green'));
    spanElem.removeEventListener(
      'click',
      (event) => logTarget(event, 'grey'),
      true
    );
  });
});
