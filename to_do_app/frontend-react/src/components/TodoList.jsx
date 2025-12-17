export default function TodoList({ todos, onToggle, onDelete }) {
  return (
    <div style={{ marginTop: 15 }}>
      {todos.map(t => (
        <div
          key={t.id}
          style={{
            padding: "10px",
            border: "1px solid #ddd",
            marginBottom: 8,
            borderRadius: 8,
            display: "flex",
            justifyContent: "space-between",
            background: t.completed ? "#e6ffe6" : "#fff"
          }}
        >
          <div>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => onToggle(t)}
            />
            <span style={{ marginLeft: 8 }}>{t.title}</span>
          </div>

          <button onClick={() => onDelete(t.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
