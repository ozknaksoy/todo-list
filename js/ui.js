export class UI {
  addTodoToList(todos) {
    let todosContainer = document.getElementById("todos");
    todos.forEach((todo) => {
      todosContainer.innerHTML += `
    <ul>
      <li>
         <span>${todo.text}</span>
         <div class="checkbox-container">
           <input id="check-completed" type="checkbox" />
            <button id="delete-todo-${todo.id}" class="x-button" onclick="handleDeleteTodo('${todo.id}')">
            <i class="fa-solid fa-x icon-delete" style="color: #ff0000"></i>
           </button>
          </div>
      </li>
    </ul>
      `;
    });
  }
}

window.handleDeleteTodo = (todoId) => {
  fetch(`http://localhost:3000/todos/${todoId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        document.getElementById(`delete-todo-${todoId}`).parentNode.remove();
      } else {
        throw new Error("Todo silinemedi.");
      }
    })
    .catch((error) => {
      console.error("Hata:", error);
    });
};
