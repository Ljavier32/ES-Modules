import { taskmanager } from "./taskmanager.js";

const taskInput = document.getElementById('taskInput');
const addtaskButton = document.getElementById('addtaskButton');

addtaskButton.addEventListener('click', () => {
    const taskDescripcion = taskInput.value;
    if (taskDescripcion) {
        taskmanager.addtaskButton(taskDescripcion);
        taskInput.value = '';
    }
});