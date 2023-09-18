// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        ${taskText}
        <button class="deleteBtn">Delete</button>
    `;

    li.querySelector(".deleteBtn").addEventListener("click", () => {
        li.remove();
    });

    li.addEventListener("click", () => {
        li.classList.toggle("complete");
    });

    taskList.appendChild(li);
    taskInput.value = "";
}

// Event listeners
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
