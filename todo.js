const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.onclick = function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement('li');
    li.textContent = taskText;

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = "";
};
