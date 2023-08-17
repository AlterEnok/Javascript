// const logTarget = (text, color) => {
//   const eventsListElem = document.querySelector('.events-list');
//   eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
// };

// const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
// const logGreenP = logTarget.bind(null, 'P', 'green');
// const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

// const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
// const logGreyP = logTarget.bind(null, 'P', 'grey');
// const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

// divElem.addEventListener('click', logGreyDiv, true);
// divElem.addEventListener('click', logGreenDiv);

// pElem.addEventListener('click', logGreyP, true);
// pElem.addEventListener('click', logGreenP);

// spanElem.addEventListener('click', logGreySpan);
// spanElem.addEventListener('click', logGreenSpan);

// document.addEventListener('DOMContentLoaded', () => {
//   const divElem = document.querySelector('.rect_div');
//   const pElem = document.querySelector('.rect_p');
//   const spanElem = document.querySelector('.rect_span');
//   const eventsListElem = document.querySelector('.events-list');

//   const logTarget = (text, color) => {
//     const eventsListElem = document.querySelector('.events-list');
//     eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
//   };

//   const clearButton = document.querySelector('.clear-btn');
//   clearButton.addEventListener('click', () => {
//     eventsListElem.innerHTML = '';
//   });

//   const attachButton = document.querySelector('.attach-handlers-btn');
//   attachButton.addEventListener('click', () => {
//     divElem.addEventListener(
//       'click',
//       logTarget.bind(null, 'div', 'grey'),
//       true
//     );
//     divElem.addEventListener('click', logTarget.bind(null, 'div', 'green'));

//     pElem.addEventListener('click', logTarget.bind(null, 'p', 'grey'), true);
//     pElem.addEventListener('click', logTarget.bind(null, 'p', 'green'));

//     spanElem.addEventListener('click', logTarget.bind(null, 'span', 'grey'));
//     spanElem.addEventListener('click', logTarget.bind(null, 'span', 'green'));
//   });

//   const removeButton = document.querySelector('.remove-handlers-btn');
//   removeButton.addEventListener('click', () => {
//     divElem.removeEventListener(
//       'click',
//       logTarget.bind(null, 'div', 'grey'),
//       true
//     );
//     divElem.removeEventListener('click', logTarget.bind(null, 'div', 'green'));

//     pElem.removeEventListener('click', logTarget.bind(null, 'p', 'grey'), true);
//     pElem.removeEventListener('click', logTarget.bind(null, 'p', 'green'));

//     spanElem.removeEventListener('click', logTarget.bind(null, 'span', 'grey'));
//     spanElem.removeEventListener(
//       'click',
//       logTarget.bind(null, 'span', 'green')
//     );
//   });
// });
document.addEventListener('DOMContentLoaded', () => {
  const divElem = document.querySelector('.rect_div');
  const pElem = document.querySelector('.rect_p');
  const spanElem = document.querySelector('.rect_span');
  const eventsListElem = document.querySelector('.events-list');

  const logTarget = (target, color) => {
    const span = document.createElement('span');
    span.style.color = color;
    span.style.marginLeft = '8px';
    span.textContent = target;
    eventsListElem.appendChild(span);
  };

  const clearButton = document.querySelector('.clear-btn');
  clearButton.addEventListener('click', () => {
    eventsListElem.innerHTML = '';
  });

  const attachButton = document.querySelector('.attach-handlers-btn');
  attachButton.addEventListener('click', () => {
    divElem.addEventListener(
      'click',
      logTarget.bind(null, 'div', 'grey'),
      true
    );
    divElem.addEventListener('click', logTarget.bind(null, 'div', 'green'));

    pElem.addEventListener('click', logTarget.bind(null, 'p', 'grey'), true);
    pElem.addEventListener('click', logTarget.bind(null, 'p', 'green'));

    spanElem.addEventListener('click', logTarget.bind(null, 'span', 'grey'));
    spanElem.addEventListener('click', logTarget.bind(null, 'span', 'green'));
  });

  const removeButton = document.querySelector('.remove-handlers-btn');
  removeButton.addEventListener('click', () => {
    divElem.removeEventListener(
      'click',
      logTarget.bind(null, 'div', 'grey'),
      true
    );
    divElem.removeEventListener('click', logTarget.bind(null, 'div', 'green'));

    pElem.removeEventListener('click', logTarget.bind(null, 'p', 'grey'), true);
    pElem.removeEventListener('click', logTarget.bind(null, 'p', 'green'));

    spanElem.removeEventListener('click', logTarget.bind(null, 'span', 'grey'));
    spanElem.removeEventListener(
      'click',
      logTarget.bind(null, 'span', 'green')
    );
  });
});
