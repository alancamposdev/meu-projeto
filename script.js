const taskInput =  document.getElementById('taskInput');
const taskList =   document.getElementById('taskList');
const addTaskBtn = document.getElementById('addTaskBtn');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
        li.addEventListener('click', toggleTask);
    }
}

function toggleTask() {
    this.classList.toggle('completed');
}
