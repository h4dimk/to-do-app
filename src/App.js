// App.js
import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import CompletedTodoList from "./CompletedTodoList";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  const [error, setError] = useState("");

  const addTodo = () => {
    if (toDo.trim() === "") {
      setError("Please enter a non-empty todo item.");
      return;
    }

    setToDos([...toDos, { text: toDo, completed: false }]);
    setToDo("");
    setError("");
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <div className="todo-container">
        <div className="todo-form">
          <input
            type="text"
            placeholder="Add a new todo"
            value={toDo}
            onChange={(e) => setToDo(e.target.value)}
          />
          <button onClick={addTodo}>Add</button>
          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="lists-container">
          <TodoList toDos={toDos} setToDos={setToDos} />
          <CompletedTodoList toDos={toDos} />
        </div>
      </div>
    </div>
  );
}

export default App;
