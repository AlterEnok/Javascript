import { renderTasks} from './renderer';
import { getItem, setItem} from './storage';

export const onToggleTask = e =>{
    const isCheckbox = e.target.classList.contains('list__item-checkbox');

    if(!isCheckbox){
        return;
    }

    const tasksList = getItem('tasksList');
    const newTasksList = tasksList
    .map(task =>{
        if(task.id === e.target.dataset.id){
            const done = e.target.checked;
            return{
                ...task,
                done,
                finishDate: done 
                    ? new Date().toISOString()
                    : null
            };
        }
    });

    setItem('tasksList', newTasksList);

    renderTasks();
};