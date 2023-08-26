const tasks = [
  { id: 'task1', text: 'Buy milk', done: false },
  { id: 'task2', text: 'Pick up Tom from airport', done: false },
  { id: 'task3', text: 'Visit party', done: false },
  { id: 'task4', text: 'Visit doctor', done: true },
  { id: 'task5', text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');
const taskInputElem = document.querySelector('.task-input');
const createTaskBtnElem = document.querySelector('.create-task-btn');

const renderTasks = (tasksList) => {
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
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
