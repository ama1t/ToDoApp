import { useEffect, useState } from "react";
import ProgressTracker from "./components/ProgressTracker";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import './ App.css'

export default function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  })

  const addTask = (task) => {
    setTasks([...tasks, task]);
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index))
  }

  const clearTask = () => {
    setTasks([]);
  }
  return (
    <>
      <h1>ToDo</h1>
      <p>Your friendly Task Manager</p>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      < ProgressTracker tasks={tasks} />
      <button onClick={clearTask}>Clear All Tasks</button>
    </>
  );
}