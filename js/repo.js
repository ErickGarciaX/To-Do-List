export const taskRepo = {
    tasks: [], 

    add(task) {
        this.tasks.push(task);
    },

    remove(index) {
            this.tasks.splice(index, 1);
    },

    toggle(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
    }, 

    getAll() {
        return this.tasks;
    }
};