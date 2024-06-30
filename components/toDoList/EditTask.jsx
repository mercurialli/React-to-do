import React, {useState} from 'react'
import { Task } from './Task';

// export const EditTask = ({editTask, id, title}) => {
//     const [value, setValue] = useState(title, id);
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const inputValue = e.target.taskInputChange.value;
//         {
//           const newTask = {    id: id,
//                             title: inputValue, };
//           setValue(editTask(id, newTask.title));
//         }
//       };

  return (
    <form onSubmit={handleSubmit} className="task-form">
    <input type="text" id = 'taskInputChange' className="todo-input" placeholder={title} />
    <button type="submit" className='save-btn' onClick={() => setOnEdit(false)}>Save</button>
  </form>
  )
}