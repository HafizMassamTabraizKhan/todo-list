import { getTodos, setTodos } from './Storage.js';

export default class TodoStore {
  constructor() {
    this.getData();
  }

  getData() {
    this.todosArray = getTodos();
  }

  addTodo(todo) {
    this.todosArray.push(todo);
    setTodos(this.todosArray);
  }

  removeTodo(index) {
    this.todosArray.splice(index, 1);
    for (let i = 0; i < this.todosArray.length; i += 1) {
      this.todosArray[i].index = i + 1;
    }
    setTodos(this.todosArray);
  }

  editTodo(index, newDescription) {
    this.todosArray[index].description = newDescription;
    setTodos(this.todosArray);
  }

  completedTodo = (index, completed) => {
    this.todosArray[index].completed = completed;
    setTodos(this.todosArray);
  }

  removeCompleted = () => {
    this.todosArray = this.todosArray.filter((todo) => todo.completed === false);
    for (let i = 0; i < this.todosArray.length; i += 1) {
      this.todosArray[i].index = i + 1;
    }
    setTodos(this.todosArray);
  }

  // Show Todos in DOM
  render() {
    let todoListContent = '';
    this.todosArray.forEach((todo) => {
      todoListContent += `
            <li class="todo" id="${todo.index}">
              <div> 
                  <input class="completed-btn" type="checkbox" ${todo.completed ? 'checked' : ''}>
                  `;

      if (todo.completed) { todoListContent += `<label class="todo-desc edit-todo-input checked" contenteditable="true">${todo.description}</label>`; } else { todoListContent += `<label class="todo-desc edit-todo-input" contenteditable="true">${todo.description}</label>`; }

      todoListContent += `
              </div>
              <i class="fas fa-trash-alt remove-icon"></i>
            </li>`;
      document.querySelector('.todos').innerHTML += (todoListContent);
    });

    return todoListContent;
  }

  // Check if empty
  empty() {
    return this.todosArray.length === 0;
  }
}