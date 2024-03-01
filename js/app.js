import { UI } from "./ui.js";
import { Request } from "./request.js";
import { generateUuid } from "./utils.js";

const TODO_INPUT = document.getElementById("todo-input");
const ADD_BUTTON = document.getElementById("add-button");

const request = new Request();
const ui = new UI();

function initListeners() {
  TODO_INPUT.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  });

  ADD_BUTTON.addEventListener("click", handleAddTodo);
}

function validateToDo(value) {
  if (value === "") {
    console.error("Todo alanı boş bırakılamaz.");
    throw new Error("Todo alanı boş bırakılamaz.");
  }

  if (value.length > 50) {
    console.error("Todo alanı 50 karakterden uzun olamaz.");
    throw new Error("Todo alanı 50 karakterden uzun olamaz.");
  }

  if (value.length < 3) {
    console.error("Todo alanı 3 karakterden kısa olamaz.");
    throw new Error("Todo alanı 3 karakterden kısa olamaz.");
  }
}

async function handleAddTodo() {
  let todoInputValue = TODO_INPUT.value;

  validateToDo(todoInputValue);

  await request.post("/todos", {
    id: generateUuid(),
    text: todoInputValue,
    completed: false,
  });
}

function initApplication() {
  // Initialize event listeners
  initListeners();
}

(function () {
  initApplication();

  setInterval(async () => {
    console.log("Fetching todos...");
    const todos = await request.get("/todos");
    ui.renderTodos(todos);
  }, 1000);
})();
