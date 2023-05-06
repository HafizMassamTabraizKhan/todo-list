const completedTodos = (todoStore) => {
  for (let i = 0; i < todoStore.todosArray.length; i += 1) {
    const checkboxes = document.querySelectorAll('.completed-btn');
    const todoDesc = document.querySelectorAll('.todo-desc');
    checkboxes[i].addEventListener('change', (e) => {
      todoStore.completedTodo(i, e.target.checked);
      if (e.target.checked) todoDesc[i].classList.add('checked');
      else todoDesc[i].classList.remove('checked');
    });
  }
};

export default completedTodos;