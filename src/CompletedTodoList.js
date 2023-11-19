// CompletedTodoList.js
import React from "react";

const CompletedTodoList = ({ toDos }) => {
  const completedTodos = toDos.filter((todo) => todo.completed);

  return (
    <div className="list-container">
      <h2>Completed Todos</h2>
      <ul className="completed-todo-list">
        {completedTodos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedTodoList;
