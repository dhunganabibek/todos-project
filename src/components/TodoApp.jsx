import React, { useState } from "react";
import Task from "./Task";

function TodoApp() {
  const [task, setTask] = useState({});
  const [allTasks, setAllTasks] = useState([]);

  const addTask = (taskName) => {
    let taskObj = { name: task, status: false };
    setAllTasks([...allTasks, taskObj]);
  };

  const deleteTask = (taskName) => {
    const newTaskList = allTasks.filter((task) => task !== taskName);
    setAllTasks(newTaskList);
  };

  const completeTask = (taskName) => {
    const newTaskList = [];
    for (const element of allTasks) {
      if (element.name === taskName.name) {
        element.status = true;
        newTaskList.push(element);
      } else {
        newTaskList.push(element);
      }

      setAllTasks(newTaskList);
    }
  };

  return (
    <div>
      <h1 className="header">Todo Application</h1>
      <input
        type="text"
        className="form-input"
        placeholder="Enter your Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn btn-warning" onClick={addTask}>
        Add task
      </button>

      {allTasks?.map((task) => (
        <Task task={task} deleteTask={deleteTask} completeTask={completeTask} />
      ))}
    </div>
  );
}

export default TodoApp;
