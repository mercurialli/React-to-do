import React, { useState } from "react";

export const EditTaskForm = ({ editTitle, task }) => {
  const [value, setValue] = useState(task.title);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTitle(value, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <div className="form-container">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="edit-input"
        placeholder={task.title}
      />
      <button type="submit" className="edit-btn">
        Save
      </button>
      </div>
    </form>
  );
};
