const editTodo = (todoStore) => {
  for (let i = 0; i < todoStore.todosArray.length; i += 1) {
    const todoDesc = document.querySelectorAll('.todo-desc');

    todoDesc[i].addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    });
    todoDesc[i].addEventListener('input', () => {
      todoStore.editTodo(i, todoDesc[i].innerHTML);
    });
  }
};

export default editTodo;