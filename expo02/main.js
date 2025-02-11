import { taskManager } from "./taskmanager";

const taskInput = document.getElementById('taskImput');
const addTaskButton = document.getElementById('addTaskButton');

addTaskButton.addEventListener('click', () => {
    const taskdescription = taskInput.value;
    if (taskdescription) {
        taskManager.addTask(taskdescription);
        taskInput.value = '';
    }
    });