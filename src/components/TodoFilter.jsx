export default function TodoFilter({ filter, onFilterChange }) {
  const filters = ["all", "active", "completed"];

  return (
    <div className="todo-filter">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onFilterChange(f)}
          className={filter === f ? "active-filter" : ""}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}
