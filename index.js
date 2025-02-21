// Variables

const list = document.querySelector("#list-tasks");

let listElements = document.querySelectorAll(".list-element");

const buttonAdd = document.querySelector("#add");

const listElement = listElements[0].cloneNode(true);

// Functions

const addTask = () => {
  const newTask = document.querySelector("#input");
  const errorMessage = document.querySelector("#error");

  if (newTask.value.trim() === "") {
    
    errorMessage.classList.remove("hidden");
    console.log("Error: Task is empty");
    return;
  } else {
    errorMessage.classList.add("hidden");
  }

  const newListElement = listElement.cloneNode(true);
  const taskText = newListElement.querySelector("p");
  taskText.innerText = newTask.value;

  list.appendChild(newListElement);

  newTask.value = "";

  updateButtonsRemove();
};

const removeTask = (button) => {
  const listItem = button.closest(".list-element");
  listItem.remove();
  updateButtonsRemove();
  console.log("Task removed");
};

const handleRemoveClick = (event) => {
  const button = event.target.closest(".delete");
  removeTask(button);
};

const updateButtonsRemove = () => {
  listElements = document.querySelectorAll(".list-element");
  let buttonsRemove = document.querySelectorAll(".delete");
  buttonsRemove.forEach((buttonRemove) => {
    buttonRemove.removeEventListener("click", handleRemoveClick); // Eliminar event listener previo
    buttonRemove.addEventListener("click", handleRemoveClick); // Agregar nuevo event listener
  });
};

// Event listeners

buttonAdd.addEventListener("click", addTask);

// Call functions for initialization

updateButtonsRemove();