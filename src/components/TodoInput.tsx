import { useState } from "react";

type Props = {
  onAddTodo: (text: string) => void;
};

export default function TodoInput({ onAddTodo }: Props) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    onAddTodo(input);
    setInput("");
  };
  return (
    <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={handleAdd}
        style={{
          backgroundColor: "#a5daed",
          color: "white",
          border: "none",
          padding: "8px 14px",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        追加
      </button>
    </div>
  );
}
