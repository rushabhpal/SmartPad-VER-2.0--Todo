function renderTasks(tasks) {
  taskListDom.innerHTML = "";
  tasks.forEach((item) => {
    if (item.completed === false) {
      const li = document.createElement("li");
      const editButton = document.createElement("button");
      const deleteButton = document.createElement("button");
      const span = document.createElement("span");
      const input = document.createElement("input");
      const timeSpan = document.createElement("span");
      timeSpan.textContent = ` (Created: ${item.createdAt})`;

      timeSpan.style.fontSize = "0.8em";
      timeSpan.style.color = "gray";
      span.textContent = item.task;

      input.type = "checkbox";
      input.dataset.action = "check";
      input.dataset.id = item.id;

      editButton.textContent = "Edit Task";
      editButton.dataset.action = "edit";
      editButton.dataset.id = item.id;

      deleteButton.textContent = "Delete Task";
      deleteButton.dataset.action = "delete";
      deleteButton.dataset.id = item.id;

      taskListDom.append(li);
      li.prepend(input);
      li.append(span);
      li.append(timeSpan);
      li.append(editButton);
      li.append(deleteButton);
    }
  });
}
function renderCompletedTasks(tasks) {
  completedList.innerHTML = "";
  tasks.forEach((item) => {
    if (item.completed === true) {
      const li = document.createElement("li");
      const deleteButton = document.createElement("button");
      const input = document.createElement("input");
      const timeSpan = document.createElement("span");
      const taskText = document.createElement("span");

      taskText.textContent = item.task;

      timeSpan.textContent = ` (Created: ${item.createdAt})`;
      timeSpan.style.fontSize = "0.8em";
      timeSpan.style.color = "gray";

      input.type = "checkbox";
      input.dataset.action = "check";
      input.dataset.id = item.id;
      input.checked = true;

      deleteButton.textContent = "Delete";
      deleteButton.dataset.action = "delete";
      deleteButton.dataset.id = item.id;

      li.append(input);
      li.append(taskText);
      li.append(timeSpan);
      li.append(deleteButton);
      completedList.append(li);
    }
  });
}


export { renderCompletedTasks };
export { renderTasks };
