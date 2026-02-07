import type { Todo } from "../types/todo";
import { FaRegCircle, FaCheckCircle } from "react-icons/fa";

type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  isEditing: boolean;
};

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
  isEditing,
}: Props) {
  return (
    <li style={{ marginBottom: "8px" }}>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "8px",
          borderRadius: "4px",
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "#a5daed",
          marginRight: "8px",
        }}
      >
        <span
          onClick={() => onToggle(todo.id)}
          style={{ cursor: "pointer", fontSize: "18px" }}
        >
          {todo.completed ? (
            <FaCheckCircle color="#FFF" />
          ) : (
            <FaRegCircle color="#FFF" />
          )}
        </span>

        <span
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.text}
        </span>
      </div>
      {isEditing && (
        <button
          onClick={() => onDelete(todo.id)}
          style={{
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            padding: "4px 8px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          削除
        </button>
      )}
    </li>
  );
}
