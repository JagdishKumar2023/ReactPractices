import React from "react";

export const TodoList = ({ dispatch, todos }) => {
  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", id });
  };

  return (
    <div>
      {todos.map((todo) => {
        <div>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => handleToggle(todo.id)}
          />
          <span
            style={{
              textDecoration: todo.isComplete ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>;
      })}
    </div>
  );
};
