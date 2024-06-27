import { useCallback, useState } from "react";
import { v4 as uniqueId } from "uuid";
import { useForm, SubmitHandler } from "react-hook-form";
import { Task } from "../components/toDoList/Task";

export default function HomePage() {
  const [tasks, setTasks] = useState([]);
  console.log({tasks})
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
  };

  const deleteTask = useCallback((id) => {
    const currentTask = tasks.filter((item) => item.id !== id);
    setTasks(currentTask);
  }, [tasks]);

  return (
    <main className="main">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="taskInput" className="main-label">
            New todo:
          </label>
          <input type="text" id="taskInput" placeholder="New todo" />
          <button className="main-btn" type="submit">
            Add todo
          </button>
        </form>

        <ul className="ul-container">
          {tasks.map((task, index) => {
            return (
              <Task key={index} task={task} deleteTask={deleteTask} />
              
            );
          })}
        </ul>
      </div>
    </main>
  );
}
