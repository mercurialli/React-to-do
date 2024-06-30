import { useCallback, useState } from "react";
import { v4 as uniqueId } from "uuid";
import { useForm, SubmitHandler } from "react-hook-form";
import { Task } from "../components/toDoList/Task";
import { EditTask } from "../components/toDoList/EditTask";

export default function HomePage() {
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const inputValue = evt.target.taskInput.value.trim();
    if (inputValue) {
      const newTask = { 
        id: uniqueId(),
        title: inputValue,
      };
      setTasks([...tasks, newTask]);
      evt.target.taskInput.value = "";
    }
  }

  const deleteTask = useCallback((id) => {
    const currentTask = tasks.filter((item) => item.id !== id);
    setTasks(currentTask);
  }, [tasks]);

  const editTask = useCallback((id, newTitle) => {
    const editedTask = tasks.map(({ id, title }) => ({
      title: id === id ? newTitle : title
    }));
    setTasks(editedTask);
  }, [tasks]);

  return (
    <main className="main">
      <div className="container">
        <h1 className="main-title">Todo List</h1>
      <ul className="ul-container">
          {tasks.map((task, index) => {
            return (
              <Task 
              key={index} 
              task={task} 
              deleteTask={deleteTask} 
              editTask={editTask} />
            )})}
        </ul> 

        <form className="main-form" onSubmit={handleSubmit}>
          <label htmlFor="taskInput" className="main-label">
            New todo:
          </label>
          <div>
          <input className="main-input" type="text" id="taskInput" placeholder="New todo" />
          <button className="main-btn" type="submit">
            Add todo
          </button>
          </div>
        </form>
      </div>
    </main>
  );
}