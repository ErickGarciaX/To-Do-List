import { taskRepo } from "./repo.js";
import { handleDelete, handleToggle } from "./main.js";

export const taskUI = {
    
    renderTasks() {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = ""; // Clear the list before rendering

        taskRepo.getAll().forEach((task, index) => {
            const li = document.createElement("li");
            
            if (task.completed) {
                li.classList.add("completed");
            }

            li.textContent = task.text;

            const btn = document.createElement("buttonDelete");
            btn.textContent = "Delete";

            btn.addEventListener("click", (e) => {
                e.stopPropagation(); // Prevent the click from bubbling up to the li
                handleDelete(index);
            });

            li.addEventListener("click", () => handleToggle(index));

            li.appendChild(btn);

            taskList.appendChild(li);

        });
    }
}