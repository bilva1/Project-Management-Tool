const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", addTask);

function addTask(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("div");
        taskItem.className = "task-item";
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}
