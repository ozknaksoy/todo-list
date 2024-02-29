import { UI } from "./ui.js";
import { Request } from "./request.js";

let todoInput = document.getElementById("todo-input");
let addButton = document.getElementById("add-button");
let completedButton = document.getElementById("completed");
let notCompletedButton = document.getElementById("not-completed");
let allButton = document.getElementById("all");
// let todosContainer = document.getElementById("todos");

const request = new Request();
const ui = new UI();

function eventlisteners() {
  todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  });
  addButton.addEventListener("click", handleAddTodo);
  // completedButton.addEventListener("click", completedTodo);
}

const res = await request.get("http://localhost:3000/todos");
ui.getAllTodos(res);

async function handleAddTodo(e) {
  let todoInputValue = todoInput.value;

  if (todoInputValue === "") {
    alert("Todo alanı boş bırakılamaz.");
  } else {
    let id = (1000 + Math.floor(Math.random() * 9999)).toString();

    const newTodo = await request.post("http://localhost:3000/todos", {
      id: id,
      text: todoInputValue,
      completed: false,
    });

    ui.addTodoToList(newTodo);
  }
  e.preventDefault;
}

eventlisteners();
