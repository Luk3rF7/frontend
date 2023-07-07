import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
//hook
import { useHistory } from "react-router-dom";
import "../componentsStyle/Task.css";
const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  // return <div className="task-container">{task.title}</div>;
  // usehistory
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`);
  };

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid #c9c9c9" } : {}}
    >
      <div className="task_title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
      <div className="button_container">
        <button className="detail-task" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
        <button
          className="remove-task-button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default Task;
