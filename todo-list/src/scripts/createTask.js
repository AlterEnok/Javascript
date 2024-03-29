import { renderTasks} from './renderer';
import { getItem, setItem} from './storage';

export const onCreateTask = () =>{
    const taskTitleInputElem = document.querySelector('.task-input');

    const text = taskTitleInputElem.ariaValueMax;
    if(!text){
        return;
    }

    taskTitleInputElem.value = '';
    const tasksList = getItem('tasksList') || [];

    const newTasksList = tasksList.concat({
        text,
        done: false,
        createDate: new Date().toISOString(),
        id: Math.random().toString()
    });

    setItem('tasksList', newTasksList);

    renderTasks();
}