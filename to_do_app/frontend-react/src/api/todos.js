const API = "http://localhost:8080/api/todos";

export async function getTodos() {
  return fetch(API).then(r => r.json());
}

export async function createTodo(title) {
  return fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title })
  }).then(r => r.json());
}

export async function updateTodo(id, body) {
  return fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }).then(r => r.json());
}

export async function deleteTodo(id) {
  return fetch(`${API}/${id}`, { method: "DELETE" });
}
