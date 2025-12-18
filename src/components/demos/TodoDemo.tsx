// TodoDemo.tsx (and similar for others)
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function TodoDemo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="todo-container">
      <form onSubmit={addTodo} className="gallery-controls">
        <input
          type="text"
          className="search-input"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="increment-btn">
          Add Task
        </button>
      </form>

      <div className="gallery-results" style={{ marginTop: "1rem" }}>
        {todos.length} items remaining
      </div>

      <ul style={{ listStyle: "none", marginTop: "1rem" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="component-card"
            style={{
              marginBottom: "1rem",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                flex: 1,
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
                opacity: todo.completed ? 0.5 : 1,
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="decrement-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoDemo;
