import type { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  isEditing: boolean;
};

export default function TodoList({
  todos,
  onToggle,
  onDelete,
  isEditing,
}: Props) {
  return (
    <div>
      {todos.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            color: "#999",
            marginTop: "30px",
            fontSize: "14px",
          }}
        >
          まだToDoがありません
          <br />
          上の入力欄から追加してください
        </p>
      ) : (
        <div
          style={{
            border: "2px solid #a5daed",
            borderRadius: "8px",
            padding: "8px 16px",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "10px 0",
            }}
          >
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
                isEditing={isEditing}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
