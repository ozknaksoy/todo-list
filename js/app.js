import { UI } from "./ui.js";
import { Request } from "./request.js";

let todoInput = document.getElementById("todo-input");
let addButton = document.getElementById("add-button");
let completedButton = document.getElementById("completed");
let inCompletedButton = document.getElementById("in-completed");
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
}

function handleAddTodo() {
  let todoInputValue = todoInput.value;

  if (todoInputValue === "") {
    alert("Todo alanı boş bırakılamaz.");
  } else {
    request.post("http://localhost:3000/todos", {
      text: todoInputValue,
    });
  }
}
request.get("http://localhost:3000/todos").then((res) => {
  // console.log(res);
  ui.addTodoToList(res);
});

eventlisteners();
