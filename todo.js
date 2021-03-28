
const btnAddTask = document.getElementById("btn-add");


const createNewTaskHandler = () => {
    const taskListUl = document.getElementById("task-list");
    const taskNameInput = document.getElementById("task-name-input");
    const taskNameInputValue = taskNameInput.value;
    const createLi = document.createElement("li");
    const createP = document.createElement("p");
    const createControlDiv = document.createElement("div");
    const createCheckingDiv = document.createElement("div");
    const createCheckingIcon = document.createElement("i");
    const createRemovingDiv = document.createElement("div");
    const createRemovingIcon = document.createElement("i");
    createRemovingDiv.appendChild(createRemovingIcon).className = "far fa-trash-alt";
    createCheckingDiv.appendChild(createCheckingIcon).className = "far fa-check-circle";
    createControlDiv.appendChild(createCheckingDiv).classList.add("check-as-done");
    createControlDiv.appendChild(createRemovingDiv).classList.add("remove-task");
    // createRemovingDiv.addEventListener("click", removeTask)
    createCheckingDiv.addEventListener("click", checkTaskAsDone);
    createP.innerText = taskNameInputValue;
    createLi.appendChild(createP).classList.add("task-list-item-name");
    createLi.appendChild(createControlDiv).classList.add("task-list-item-control");
    taskListUl.appendChild(createLi).classList.add("task-list-item");
    console.log("działa");
}

const checkTaskAsDone = () => {
    
} 

btnAddTask.addEventListener("click", createNewTaskHandler);





    // const taskListUl = document.getElementById("task-list");
    // const taskNameInput = document.getElementById("task-name-input");
    // const taskNameInputValue = taskNameInput.value;
    // const createLi = document.createElement("li").classList.add("task-list-item");
    // const createP = document.createElement("p").classList.add("task-list-item-name");
    // const createControlDiv = document.createElement("div").classList.add("task-list-item-control");
    // const createCheckingDiv = document.createElement("div").classList.add("check-as-done")
    // const createCheckingIcon = document.createElement("i").className = "far fa-check-circle";
    // const createRemovingDiv = document.createElement("div").classList.add("remove-task");
    // const createRemovingIcon = document.createElement("i").className = "far fa-trash-alt";




// ##########################
// ## PARKING DLA KURSORÓW ##
// ##########################