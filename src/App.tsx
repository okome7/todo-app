import { useState } from "react";
import type { Todo } from "./types/todo";

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

  return (
    <div>
      <h1>Todo App</h1>
    </div>
  );
}
