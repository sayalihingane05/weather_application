import { useEffect, useState } from "react";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
} from "./api/todos";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then(data => setTodos(data));
  }, []);

  async function addTask(title) {
    const newTodo = await createTodo(title);
    setTodos([newTodo, ...todos]);
  }

  async function toggle(todo) {
    const updated = await updateTodo(todo.id, {
      title: todo.title,
      completed: !todo.completed
    });

    setTodos(todos.map(t => (t.id === updated.id ? updated : t)));
  }

  async function remove(id) {
    await deleteTodo(id);
    setTodos(todos.filter(t => t.id !== id));
  }

  return (
    <div style={{ maxWidth: 500, margin: "50px auto" }}>
      <h1>Simple ToDo App</h1>
      <TodoInput onAdd={addTask} />
      <TodoList todos={todos} onToggle={toggle} onDelete={remove} />
    </div>
  );
}
