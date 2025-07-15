import { handleTaskBtn } from "./handleTaskBtn.js";
import { renderTasks } from "./renderTasks.js";
import { modifyTasks } from "./modifyTasks.js";
import { renderCompletedTasks } from "./renderTasks.js";
import { modifyCompletedTasks } from "./modifyTasks.js";

const taskInput = document.getElementById("taskInput");
const taskBtn = document.getElementById("taskBtn");
const taskListDom = document.getElementById("taskListDom");
const completedList = document.getElementById("completedList");
let tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];

renderTasks(tasks);
renderCompletedTasks(tasks);

taskBtn.addEventListener("click", (event) =>
  handleTaskBtn(event, tasks, taskInput)
);

taskListDom.addEventListener("click", (event) => modifyTasks(event, tasks));
completedList.addEventListener("click", (event) => {
  modifyCompletedTasks(event, tasks);
});
