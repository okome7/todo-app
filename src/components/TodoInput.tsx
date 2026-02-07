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
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>追加</button>
    </div>
  );
}
