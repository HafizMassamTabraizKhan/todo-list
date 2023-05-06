import './style.css';
import TodoStore from './modules/TodoStore.js';
import addTodo from './modules/AddTodo.js';
import listOfTodos from './modules/RenderTodos.js';
import editTodo from './modules/EditTodo.js';

const todoStore = new TodoStore();

listOfTodos(todoStore);

// ADD TODO
document.addEventListener('keydown', (event) => {
  const { target } = event;

  if (target.classList.contains('todo-input')) {
    if (event.key === 'Enter') {
      addTodo(todoStore, target.value);
      target.value = '';
    }
  }
});

// EDIT TODO
editTodo(todoStore);

// REMOVE ALL COMPLETED TODOS
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
  todoStore.removeCompleted();
  listOfTodos(todoStore);
});
