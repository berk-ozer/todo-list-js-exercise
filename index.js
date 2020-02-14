// Creates a new task object
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,
    markCompleted() {
      this.complete = true;
    },
    logState() {
      console.log(`${this.title} has${this.complete ? '' : ' not'} been completed`);
    }
  }

  return task;
}

// DRIVER CODE BELOW

const task1 = newTask('Clean Cat Litter', 'Take all the poo out of the litter box');
const task2 = newTask('Do Laundry', 'you need clean new clothes');
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();
