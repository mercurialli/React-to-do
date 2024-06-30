import Image from "next/image";
import { useState } from "react";
import {EditTask} from "./EditTask.jsx"
import editSrc from "./icon-edit.svg";
import deleteSrc from "./icon-trash.svg";


export function Task({task, deleteTask, editTask}){
    const [onEdit, setOnEdit] = useState(false);
    const {id, title} = task
    console.log('Task', id, title);
    return (
    <ul className="ul-container">
        <li className="tasks-list">
        {title}
        <button className="delete" onClick={() => deleteTask(id)}>
            <Image
            src={deleteSrc}
            alt="delete-icon"
            className="delete-icon"
            />
        </button>
        <button className="edit" onClick={() => 
        { setOnEdit(true) }}>
            <Image 
            src={editSrc} 
            alt="edit-icon" 
            className="edit-icon" 
            />
        </button>
        {onEdit && (<EditTask key={id} task={task} editTask={editTask} id={id} title={title} />)}
        </li>
    </ul>
    )
}






   // const [onEdit, setOnEdit] = useState(false);
        {/* {onEdit &&
        <form onSubmit={(evt) => handleChange(evt)}>
        <input 
        className="input-edit"
        type="text" 
        key={id} 
        placeholder={title} 
        onChange={handleSubmit(evt.target.value)} 
        />
        <button onClick={() => {setOnEdit(false)}} >Save</button>
        </form>} */}

        {/* {onEdit && 
            <div className="input-edit">
            <input type="text" placeholder={title} />
            <button onClick={() => setOnEdit(false)}>Save</button>
        </div>
        } */}