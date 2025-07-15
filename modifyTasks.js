import { renderTasks } from "./renderTasks.js";
import { renderCompletedTasks } from "./renderTasks.js";

function modifyTasks(event, tasks) {
  if (event.target.nodeName === "BUTTON") {
    if (event.target.dataset.action === "edit") {
      const targetId = Number(event.target.dataset.id);
      const item = tasks.find((item) => item.id === targetId);
      const li = event.target.parentElement;
      const input = document.createElement("input");
      input.dataset.role = "edit";
      const span = li.querySelector("span");

      input.value = item.task;
      span.replaceWith(input);

      // Highlight the li being edited
      li.classList.add("editing");

      event.target.textContent = "Save";
      event.target.dataset.action = "Save";

      // Disable other edit buttons
      const allEditButtons = document.querySelectorAll('button[data-action="edit"]');
      allEditButtons.forEach((btn) => {
        if (btn !== event.target) {
          btn.disabled = true;
        }
      });

    } else if (event.target.dataset.action === "Save") {
      const targetId = Number(event.target.dataset.id);
      const li = event.target.parentElement;
      const input = li.querySelector('input[data-role="edit"]');

      if (input.value.trim() == "") {
        alert("Enter a task");
      } else {
        const item = tasks.find((item) => item.id === targetId);
        item.task = input.value;

        const span = document.createElement("span");
        span.textContent = input.value;
        input.replaceWith(span);

        // Remove highlight
        li.classList.remove("editing");

        localStorage.setItem("tasks", JSON.stringify(tasks));
        event.target.textContent = "Edit Task";
        event.target.dataset.action = "edit";

        renderTasks(tasks);

        // Re-enable all edit buttons
        const allEditButtons = document.querySelectorAll('button[data-action="edit"]');
        allEditButtons.forEach((btn) => {
          btn.disabled = false;
        });
      }

    } else if (event.target.dataset.action === "delete") {
      const targetId = Number(event.target.dataset.id);
      const targetIndex = tasks.findIndex((item) => item.id === targetId);
      tasks.splice(targetIndex, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks(tasks);
    }

  } else if (event.target.nodeName === "INPUT") {
    const targetId = Number(event.target.dataset.id);
    const item = tasks.find((item) => item.id === targetId);
    item.completed = true;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderCompletedTasks(tasks);
    renderTasks(tasks);
  }
}


function modifyCompletedTasks(event, tasks) {
  if (event.target.nodeName === "BUTTON") {
    const targetIndex = Number(event.target.dataset.id);
    const taskIndex = tasks.findIndex((item) => item.id === targetIndex);
    tasks.splice(taskIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderCompletedTasks(tasks);
    renderTasks(tasks);
  } else if (event.target.nodeName === "INPUT") {
    const targetIndex = Number(event.target.dataset.id);
    const item = tasks.find((item) => item.id === targetIndex);
    item.completed = false;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks(tasks);
    renderCompletedTasks(tasks);
  }
}

export { modifyCompletedTasks };
export { modifyTasks };
