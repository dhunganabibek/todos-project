import React from "react";

function Task({ task, deleteTask, completeTask }) {
  return (
    <div>
      <div className="alert alert-success">
        <div className="task-alert">
          {task.status === false ? (
            <>
              {task.name}
              <div>
                <button
                  className="btn btn-danger me-2"
                  onClick={() => deleteTask(task)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => completeTask(task)}
                >
                  Complete
                </button>
              </div>
            </>
          ) : (
            <div className="completed">
              {`${task.name}`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Task;
