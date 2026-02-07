import type { Todo } from "../types/todo";

type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li>
      <span
        onClick={() => onToggle(todo.id)}
        style={{
          cursor: "pointer",
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>削除</button>
    </li>
  );
}
