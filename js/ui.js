export class UI {
  addTodoToList(todos) {
    let todosContainer = document.getElementById("todos");
    todos.forEach((todo) => {
      todosContainer.innerHTML += `
        <li>
          <span>${todo.text}</span>
          <button id="delete-todo-${todo.id}" onclick="handleDeleteTodo(${todo.deleteTodo})">
          <i class="fa-solid fa-x" style="color: #ff0000"></i>
          </button>
        </li>`;
    });
  }
}
