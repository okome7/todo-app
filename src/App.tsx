import { useState } from "react";
import type { Todo } from "./types/todo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}
