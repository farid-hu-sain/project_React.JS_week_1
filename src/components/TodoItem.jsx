export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "gray" : "black",
          flexGrow: 1,
          marginLeft: "8px",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)} className="delete-btn">
        ❌
      </button>
    </li>
  );
}
