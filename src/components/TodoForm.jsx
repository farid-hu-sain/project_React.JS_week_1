import { useState } from "react";

export default function TodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    onAddTodo(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Tambah tugas baru..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="todo-add-btn">
        Tambah
      </button>
    </form>
  );
}
