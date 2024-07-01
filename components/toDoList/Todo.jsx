import React from 'react';
import Image from "next/image";
import editSrc from "./icon-edit.svg";
import deleteSrc from "./icon-trash.svg";

export const Todo = ({task, deleteTask, editTask}) => {
    const {id, title} = task

  return (
        <div>
        <ul className="ul-container"> 
            <li className="tasks-list"> 
                {title}
        <button className="delete" onClick={() => deleteTask(task.id)}>
            <Image
            src={deleteSrc}
            alt="delete-icon"
            className="delete-icon"
            />
        </button>
        <button className="edit" onClick={() => editTask(task.id)}>
            <Image 
            src={editSrc} 
            alt="edit-icon" 
            className="edit-icon" 
            />
        </button>
        </li> 
        </ul>
        </div>
  )
}