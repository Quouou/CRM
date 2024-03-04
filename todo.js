const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = value;

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  todoLane.appendChild(newTask);

  input.value = "";
});

const buttons = document.querySelectorAll('.popupButton');
const popup = document.getElementById('popup');
const closeButton = document.getElementById('closeButton');

function showPopup() {
  popup.style.display = 'block';
}

function hidePopup() {
  popup.style.display = 'none';
}

buttons.forEach(button => {
  button.addEventListener('click', showPopup);
});

// Event listener for close button click to hide the popup
closeButton.addEventListener('click', hidePopup);