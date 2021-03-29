const btnAddTask = document.getElementById("btn-add");
let taskId = 1;
const taskListArray = []; 

const createNewTaskHandler = () => {
    const taskNameInput = document.getElementById("task-name-input");
    const taskNameInputValue = taskNameInput.value;
    const taskToPush = {taskId: taskId, taskName: taskNameInputValue, taskDone: false}
    taskListArray.push(taskToPush);
    taskId++
    renderView();
}

const renderView = () => {
    debugger;
    document.getElementById('task-list').innerHTML = "";
    taskListArray.map(item => {
        const createLi = document.createElement("li");
        createLi.className = "task-list-item";
        const contentLi = `
            <p class="taks-list-item-name">${item.taskName}</p>
            <div class="task-list-item-control">
                <div class="check-as-done">
                    <i class="far fa-check-circle"></i>
                </div>
                <div class="remove-task">
                    <i class="far fa-trash-alt"></i>
                </div>
            </div>
        `
        createLi.innerHTML = contentLi;
        document.getElementById("task-list").append(createLi);
    })

}

// const createNewTaskHandler = () => {
//     const taskListUl = document.getElementById("task-list");
//     const taskNameInput = document.getElementById("task-name-input");
//     const taskNameInputValue = taskNameInput.value;
//     const redAlert = document.getElementById("red-alert");
//     if (taskNameInputValue !== "") {
//         const createLi = document.createElement("li");
//         let uniqueId = "task-" + taskID;
//         createLi.id = uniqueId;
//         taskID++;
//         const createP = document.createElement("p");
//         const createControlDiv = document.createElement("div");
//         const createCheckingDiv = document.createElement("div");
//         const createCheckingIcon = document.createElement("i");
//         const createRemovingDiv = document.createElement("div");
//         const createRemovingIcon = document.createElement("i");
//         createRemovingDiv.appendChild(createRemovingIcon).className = "far fa-trash-alt";
//         createCheckingDiv.appendChild(createCheckingIcon).className = "far fa-check-circle";
//         createControlDiv.appendChild(createCheckingDiv).classList.add("check-as-done");
//         createControlDiv.appendChild(createRemovingDiv).classList.add("remove-task");
//         createRemovingDiv.addEventListener("click", () => removeTask(uniqueId));
//         createCheckingDiv.addEventListener("click", () => checkTaskAsDone(uniqueId));
//         createP.innerText = taskNameInputValue;
//         createLi.appendChild(createP).classList.add("task-list-item-name");
//         createLi.appendChild(createControlDiv).classList.add("task-list-item-control");
//         taskListUl.appendChild(createLi).classList.add("task-list-item");
//         redAlert.style.display = "none";
//     } else {
//         redAlert.style.display = "block";
//     }
// }

const checkTaskAsDone = (id) => {
    // const taskToMarkAsDone = document.querySelector("#" + id + "> i");
    const taskToMarkAsDone = document.getElementById(id);
    taskToMarkAsDone.classList.toggle("taskDone");

} 

const removeTask = (id) => {
    console.log(id);
    const removeTaskElement = document.getElementById(id);
    removeTaskElement.remove();
}

btnAddTask.addEventListener("click", createNewTaskHandler);


// ##########################
// ## PARKING DLA KURSORÓW ##
// ##########################