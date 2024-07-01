import React, { useState } from "react";

export const TaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTask(value);
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="main-form">
      <label htmlFor="taskInput" className="main-label">
        New todo:
      </label>
      <div className="form-container">
        <input
          className="main-input"
          type="text"
          id="taskInput"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="New Todo"
        />
        <button type="submit" className="main-btn">
          Add Task
        </button>
      </div>
    </form>
  );
};
