import listOfTodos from './RenderTodos.js';
import Todo from './Todo.js';

const addTodo = (todoStore, description) => {
  const newTodo = new Todo(todoStore.todosArray.length + 1, description, false);
  todoStore.addTodo(newTodo);
  listOfTodos(todoStore);
};

export default addTodo;
