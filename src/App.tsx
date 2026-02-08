import { useEffect, useState } from "react";
import type { Todo } from "./types/todo";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const STORAGE_KEY = "todos_v1";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Todo[];
        setTodos(parsed);
      }
    } catch (e) {
      console.error("読み込み失敗", e);
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (e) {
      console.error("保存失敗", e);
    }
  }, [todos, loaded]);

  const addTodo = (text: string) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
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
