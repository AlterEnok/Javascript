const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');
const taskInputElem = document.querySelector('.task-input');
const createTaskBtnElem = document.querySelector('.create-task-btn');

const renderTasks = (tasksList) => {
  listElem.innerHTML = ''; // Clear the list before rendering

  const tasksElems = tasksList.map(({ id, text, done }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.dataset.taskId = id; // Set the task's id as a data attribute
    checkbox.checked = done;
    checkbox.classList.add('list__item-checkbox');
    if (done) {
      listItemElem.classList.add('list__item_done');
    }
    listItemElem.append(checkbox, text);

    checkbox.addEventListener('change', handleCheckboxChange);

    return listItemElem;
  });

  listElem.append(...tasksElems);
};

const handleCheckboxChange = (event) => {
  const taskId = event.target.dataset.taskId;
  const task = tasks.find((task) => task.id === taskId);
  task.done = event.target.checked;

  renderTasks(tasks);
};

const createTask = () => {
  const taskText = taskInputElem.value.trim();
  if (taskText === '') {
    return;
  }

  const newTask = {
    id: `task${tasks.length + 1}`,
    text: taskText,
    done: false,
  };

  tasks.push(newTask);
  taskInputElem.value = '';
  renderTasks(tasks);
};

createTaskBtnElem.addEventListener('click', createTask);

renderTasks(tasks);
