const taskInput =  document.getElementById('taskInput');
const taskList =   document.getElementById('taskList');
const addTaskBtn = document.getElementById('addTaskBtn');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
        li.addEventListener('click', toggleTask);
        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'X';
        removeBtn.className = 'remove-btn';
        li.appendChild(removeBtn);
        removeBtn.addEventListener('click', removeTask);
    }
}

function toggleTask() {
    this.classList.toggle('completed');
}

function removeTask(event) {
    const taskToRemove = event.target.parentNode;
    taskList.removeChild(taskToRemove);
}