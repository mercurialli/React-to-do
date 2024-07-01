import React, { useState } from "react";

export const EditTaskForm = ({ editTitle, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTitle(value, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="main-input"
        placeholder={task.title}
      />
      <button type="submit" className="edit-btn">
        Save
      </button>
    </form>
  );
};
