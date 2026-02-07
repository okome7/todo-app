import { useState } from "react";
import type { Todo } from "./types/todo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isEditing, setIsEditing] = useState(false);

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
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <h1 style={{ color: "#a5daed", margin: "10px 0" }}>ToDoリスト</h1>

        <button
          onClick={() => setIsEditing(!isEditing)}
          style={{
            background: "none",
            border: "1px solid #ccc",
            padding: "4px 8px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {isEditing ? "完了" : "編集"}
        </button>
      </div>

      <TodoInput onAddTodo={addTodo} />

      <div
        style={{ maxWidth: "400px", margin: "40px auto", textAlign: "left" }}
      >
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          isEditing={isEditing}
        />
      </div>
    </div>
  );
}
