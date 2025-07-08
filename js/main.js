import { taskRepo } from "./repo.js";
import { taskUI } from "./viewModel.js";


export function handleAdd() {
    const input = document.getElementById("taskInput");
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a valid task.");
        return;
    }

    taskRepo.add({ text, completed: false });
    input.value = ""; // Clear the input field
    taskUI.renderTasks(); // Re-render the task list

}

export function handleDelete(index) {
    taskRepo.remove(index);
    taskUI.renderTasks(); // Re-render the task list
}

export function handleToggle(index) {
    taskRepo.toggle(index);
    taskUI.renderTasks(); // Re-render the task list
}

document.getElementById("addTaskButton").addEventListener("click", handleAdd);