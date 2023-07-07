//libs
import React from "react";
//hook
import { useParams, useHistory } from "react-router-dom";
import Button from "./Button";

import "../componentsStyle/TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  };
  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}> Voltar </Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          l Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          praesentium inventore corporis nisi reiciendis pariatur.
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
