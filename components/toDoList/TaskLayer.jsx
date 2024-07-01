import React, { useCallback, useState } from "react";
import { Todo } from "./Todo";
import { TaskForm } from "./TaskForm";
import { v4 as uniqueId } from "uuid";
import { EditTaskForm } from "./EditTaskForm";

export const TaskLayer = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = { id: uniqueId(), title: task, isEditing: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = useCallback((id) => {
    const currentTask = tasks.filter((task) => task.id !== id);
    setTasks(currentTask);
    }, [tasks]);

  const editTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task,
      ),
    );
  };

  const editTitle = (title, id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, title, isEditing: !task.isEditing } : task,
      ),
    );
  };

  return (
    <main className="main">
      <container className="container">
        <h1 className="main-title">Todo List</h1>
        {tasks.map((task, index) =>
          task.isEditing ? (
            <EditTaskForm key={index} editTitle={editTitle} task={task} />
          ) : (
            <Todo
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ),
        )}
        <TaskForm addTask={addTask} />
      </container>
    </main>
  );
};
