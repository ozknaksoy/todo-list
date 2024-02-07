let todoInput = document.getElementById("todo-input");
let addButton = document.getElementById("add-button");
let todosContainer = document.getElementById("todos");
let deleteTodoButton = document.getElementById("delete-todo");

let todos = [
  {
    id: 1,
    text: "Order cat food",
    completed: false,
  },
  {
    id: 2,
    text: "Clean kitchen",
    completed: true,
  },
  {
    id: 3,
    text: "Buy food",
    completed: true,
  },
  {
    id: 4,
    text: "Do work",
    completed: false,
  },
  {
    id: 5,
    text: "Exercise",
    completed: false,
  },
];

function eventlisteners() {
  todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  });

  addButton.addEventListener("click", handleAddTodo);
  deleteTodoButton?.addEventListener("click", handleDeleteTodo);
}

function handleAddTodo() {
  let todoInputValue = todoInput.value;

  if (todoInputValue === "") {
    alert("Todo alani bos birakilamaz.");
  } else {
    addTodoToList(todoInputValue);
  }
}

function renderTodos(todos) {
  todosContainer.innerHTML = todos
    .map(
      (todo) => `<li>  
        <span>${todo.text}</span>
        <button id="delete-todo" onclick="handleDeleteTodo(this)">
          <i class="fa-solid fa-x" style="color: #ff0000"></i>
        </button>
      </li>`
    )
    .join("");
}

function addTodoToList(todoText) {
  todos.push({
    id: todos.length + 1,
    text: todoText,
    completed: false,
  });

  renderTodos(todos);
}

window.onload = function () {
  renderTodos(todos);
};

function handleDeleteTodo(button) {
  let todoItem = button.parentElement;
  todoItem.remove();
}

eventlisteners();

// Todolari
