const btnAddTask = document.getElementById("btn-add");
let taskId = 1;
tasksArray = [];

const renderTaskList = () => {
    // let taskIdent = ""
    const taskListUl = document.getElementById("task-list");
    taskListUl.innerHTML = "";
    tasksArray.map(taskk => {
        const htmlElement = document.createElement("li");
        htmlElement.className = "task-list-item";
        htmlElement.id = taskk.id;
        let taskIdent = taskk.id

        htmlElement.innerHTML =
        `
            <p class="task-list-item-name">
            ${taskk.taskName}
            </p>
            <div class="task-list-item-control">
                <div class="check-as-done">
                    <i class="far fa-check-circle"></i>
                </div>
                <div class="remove-task" onClick="removeTask('${taskIdent}')">
                    <i class="far fa-trash-alt"></i>
                </div>
            </div>
        `
        taskListUl.appendChild(htmlElement);

    });
}

const createNewTaskHandler = () => {
    const taskNameInput = document.getElementById("task-name-input");
    const taskNameInputValue = taskNameInput.value;
    let uniqueId = "task-" + taskId;
    taskId++;
    const taskArrayElement = {id: uniqueId, taskName: taskNameInputValue};
    tasksArray.push(taskArrayElement);
    console.log(tasksArray);
    renderTaskList();
}

const removeTask = (id) => {
    let obj = tasksArray.find(x => x.id === id);
    let index = tasksArray.indexOf(obj);
    console.log(index + " - " + obj.id);
    tasksArray.splice(index, 1);
    renderTaskList();
}

btnAddTask.addEventListener("click", createNewTaskHandler);





// ##########################
// ## PARKING DLA KURSORÓW ##
// ##########################