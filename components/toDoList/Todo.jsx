import React from "react";
import Image from "next/image";
import editSrc from "./icon-edit.svg";
import deleteSrc from "./icon-trash.svg";

export const Todo = ({ task, deleteTask, editTask }) => {
  const { id, title } = task;

  return (
    <div className="task-container">
      <ul className="ul-container">
        <li className="tasks-list">
          {title}
          <div className="main-container-button">
          <button className="delete" onClick={() => deleteTask(id)}>
            <Image src={deleteSrc} alt="delete-icon" className="delete-icon" />
          </button>
          <button className="edit" onClick={() => editTask(id)}>
            <Image src={editSrc} alt="edit-icon" className="edit-icon" />
          </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
