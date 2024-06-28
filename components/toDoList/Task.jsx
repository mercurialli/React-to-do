import Image from "next/image";
import { useState } from "react";
import {EditTask} from "./EditTask.jsx"
import editSrc from "./icon-edit.svg";
import deleteSrc from "./icon-trash.svg";


export function Task({task, deleteTask}){
    const {id, title} = task
    const [onEdit, setOnEdit] = useState(false);

return (
    <ul className="ul-container">
        <li className="tasks-list">
        {title}
        
        <button onClick={() => deleteTask(id)}>
            <Image
            src={deleteSrc}
            alt="delete-icon"
            className="delete-icon"
            />
        </button>
        <button onClick={() => setOnEdit(true) }>
            <Image 
            src={editSrc} 
            alt="edit-icon" 
            className="edit-icon" 
            />
        </button>
        
        {onEdit && 
         <div className="input-edit">
         <input type="text" placeholder={title} />
         <button onClick={() => setOnEdit(false)}>Save</button>
       </div>
        }
        </li>
    </ul>
    )
}

// const currentTask = task.filter((item) => item.id !== id);