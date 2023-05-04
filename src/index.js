import './style.css';
import todos from './modules/todos.js';

const renderTodos = () => {
  todos.forEach((todo) => {
    const todoListContent = `<li class="todo">
      <div> 
          <input class="completed-btn" type="checkbox" ${todo.compeleted ? 'checked' : ''}> 
          <p>${todo.description}</p> 
      </div>
      <i class="fa-solid fa-ellipsis-vertical task-icon"></i>
    </li>`;
    document.querySelector('.todos').innerHTML += (todoListContent);
  });
};

renderTodos();