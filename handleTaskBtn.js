import { renderTasks } from "./renderTasks.js";

function handleTaskBtn(event, tasks) {
  event.preventDefault();
  const task = taskInput.value.trim();
  if (task === "") {
    alert("No Tasks Entered");
  } else {
    tasks.push({
      id: Date.now(),
      task: taskInput.value,
      completed: false,
      createdAt: new Date().toLocaleString(),
    });

    taskInput.value = "";
    renderTasks(tasks);

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

export { handleTaskBtn };
