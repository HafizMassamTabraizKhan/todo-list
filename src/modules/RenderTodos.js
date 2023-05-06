import todosContainer from './DOMVariables.js';
import removeTodo from './RemoveTodo.js';
import completedTodos from './updateCompletedTodos.js';

const listOfTodos = (todoStore) => {
  todosContainer.innerHTML = todoStore.render();

  // REMOVE TODO
  for (let i = 0; i < todoStore.todosArray.length; i += 1) {
    const removeButtons = document.querySelectorAll('.remove-icon');
    removeButtons[i].addEventListener('click', () => {
      removeTodo(todoStore, i);
      listOfTodos(todoStore);
    });
  }

  // CHECK COMPLETED TODO
  completedTodos(todoStore);
};

export default listOfTodos;