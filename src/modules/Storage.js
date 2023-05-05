const getTodos = () => JSON.parse(localStorage.getItem('todos')) || [];

const setTodos = (tasksArray) => {
  localStorage.setItem('todos', JSON.stringify(tasksArray));
};

export { getTodos, setTodos };
