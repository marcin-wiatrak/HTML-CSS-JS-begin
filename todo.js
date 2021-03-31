const btnAddTask = document.getElementById("btn-add");
let taskId = 1;
const taskListArray = []; 

const createNewTaskHandler = () => {
    const taskNameInput = document.getElementById("task-name-input");
    const taskNameInputValue = taskNameInput.value;
    const taskToPush = {taskId: taskId, taskName: taskNameInputValue, taskDone: false}
    taskListArray.push(taskToPush);
    taskId++;
    renderView();
}

const renderView = () => {
    document.getElementById('task-list').innerHTML = "";
    taskListArray.map(item => {
        const createLi = document.createElement("li");
        createLi.className = "task-list-item";
        if(item.taskDone) {
            createLi.classList.add("taskDone");
        }
        const contentLi = `
            <p class="taks-list-item-name">${item.taskName}</p>
            <div class="task-list-item-control">
                <div class="check-as-done" onclick="taskOperation('checkAsDone', '${item.taskId}')">
                    <i class="far fa-check-circle"></i>
                </div>
                <div class="remove-task" onclick="taskOperation('delete', '${item.taskId}')">
                    <i class="far fa-trash-alt"></i>
                </div>
            </div>
        `
        createLi.innerHTML = contentLi;
        document.getElementById("task-list").append(createLi);
    })
}


// SKRÓCONA WERSJA!!!!!!!
const taskOperation = (operation, id) => {
    const element = taskListArray.find(item => item.taskId == id);
    const index = taskListArray.indexOf(element);
    if(operation == "delete") {
        taskListArray.splice(index, 1);
    } else if(operation == "checkAsDone") {
        taskListArray[index].taskDone = !taskListArray[index].taskDone;
    }
    renderView();
}
// SKRÓCONA WERSJA!!!!!!!

// WERSJA DŁUGA!!!!!!!!!!!!
const checkTaskAsDone = (id) => {
    const element = taskListArray.find(item => item.taskId == id);
    const index = taskListArray.indexOf(element);
    taskListArray[index].taskDone = !taskListArray[index].taskDone;
    renderView();
} 

const removeTask = (id) => {
    const element = taskListArray.find(item => item.taskId == id); // szuka elementu z podanym Id
    const index = taskListArray.indexOf(element); // pobiera index elementu z tablicy (liczy od 0)
    taskListArray.splice(index, 1); // usuwa nasz pobrany index z tablicy
    renderView(); // renderuje na nowo.
}
// WERSJA DŁUGA!!!!!!!!!!!!

btnAddTask.addEventListener("click", createNewTaskHandler);

// ##########################
// ## PARKING DLA KURSORÓW ##
// ##########################