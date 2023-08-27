const tasks = [
  { id: 'task1', text: 'Buy milk', done: false },
  { id: 'task2', text: 'Pick up Tom from airport', done: false },
  { id: 'task3', text: 'Visit party', done: false },
  { id: 'task4', text: 'Visit doctor', done: true },
  { id: 'task5', text: 'Visit meat', done: true },
];

const listElem = document.querySelector('.list');
const taskInputElem = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');

const renderTasks = (tasksList) => {
  listElem.innerHTML = '';

  const tasksElems = tasksList.map(({ id, text, done }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.dataset.taskId = id;
    checkbox.checked = done;
    checkbox.classList.add('list__item-checkbox');
    if (done) {
      listItemElem.classList.add('list__item_done');
    }
    listItemElem.append(checkbox, text);

    checkbox.addEventListener('change', () => {
      const task = tasks.find((task) => task.id === id);
      task.done = checkbox.checked;
      renderTasks(tasks);
    });

    return listItemElem;
  });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

createTaskBtn.addEventListener('click', () => {
  const taskText = taskInputElem.value.trim();
  if (taskText !== '') {
    const newTask = {
      id: `task${tasks.length + 1}`,
      text: taskText,
      done: false,
    };
    tasks.push(newTask);
    renderTasks(tasks);
    taskInputElem.value = '';
  }
});
