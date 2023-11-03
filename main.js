// Get references to the HTML elements
const todoInput = document.querySelector("#todo-input");
const addTodoButton = document.querySelector("#add-todo-button");
const todoList = document.querySelector("#todo-list");

// Create an array to store the to-do items
let todoItems = [];

// Load the to-do items from local storage
window.addEventListener("load", () => {
  const todoItemsFromLocalStorage = JSON.parse(localStorage.getItem("todo-items"));
  if (todoItemsFromLocalStorage) {
    todoItems = todoItemsFromLocalStorage;
  }
  displayTodos();
});

// Add a to-do item to the list
addTodoButton.addEventListener("click", () => {
  const todoItem = todoInput.value;
  todoItems.push(todoItem);
  localStorage.setItem("todo-items", JSON.stringify(todoItems));
  displayTodos();
  todoInput.value = "";
});

// Display the to-do list
function displayTodos() {
  todoList.innerHTML = "";
  todoItems.forEach((todoItem, index) => {
    const li = document.createElement("li");
    li.textContent = todoItem;
    li.addEventListener("click", () => {
      todoItems.splice(index, 1);
      localStorage.setItem("todo-items", JSON.stringify(todoItems));
      displayTodos();
    });
    todoList.appendChild(li);
  });
}

