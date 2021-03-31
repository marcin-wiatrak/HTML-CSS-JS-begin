const btnAddTask = document.getElementById("btn-add");
let taskId = 1;
// let checkId = 11;
const taskListArray = [];

const createNewTaskHandler = () => {
    const taskNameInput = document.getElementById("task-name-input");
    const taskNameInputValue = taskNameInput.value;
    const taskToPush = {
        taskId: taskId,
        taskName: taskNameInputValue,
        taskDone: false
    }
    taskListArray.push(taskToPush);
    taskId++
    renderView();
    // removeTask();
}

const renderView = () => {
    // debugger;
    document.getElementById('task-list').inner
        HTML = "";
    taskListArray.map(item => {
        const createLi = document.createElement("li");
        createLi.className = `task-list-item`;
        const contentLi = `
            <p class="task-list-item-name">${item.taskName}</p>
            <div class="task-list-item-control">
                <div class="check-as-done">
                    <i id=check-${item.taskId} class="far fa-check-circle" onClick="checkSelectedElement(this.id)" ></i>
                </div>
                <div class="remove-task">
                    <i id=${item.taskId} class="far fa-trash-alt" onClick="removeSelectedElement(this.id)" ></i>
                </div>
            </div>
        `
        createLi.innerHTML = contentLi;
        document.getElementById("task-list").append(createLi);
    })

}
const removeSelectedElement = (clicked_id) => {
    const removeElement = document.getElementById(clicked_id);
    removeElement.closest(".task-list-item").remove();
    taskListArray.splice(this.id, 1);
}




const checkSelectedElement = (clicked_id) => {
    const checkElement = document.getElementById(clicked_id);
    console.log(checkElement);
    checkElement.classList.toggle("taskDone");
    const allParagraphs = document.querySelectorAll(".task-list-item-name");
    allParagraphs[clicked_id.substr(6) - 1].classList.toggle("taskDone");
    console.log(allParagraphs[clicked_id.substr(6) - 1]);

}




btnAddTask.addEventListener("click", createNewTaskHandler);


// ##########################
// ## PARKING DLA KURSORÓW ##
// ##########################