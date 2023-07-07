import React, { useState } from "react";
import Button from "./Button";
import "../componentsStyle/AddTask.css";

const AddTask = ({ handleTaskAddition }) => {
  //use hook
  const [inputData, setInputData] = useState(" ");

  //function ao clicar
  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };
  //função ao evento
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  return (
    <div className="add_task_container">
      <input
        onChange={handleInputChange}
        value={inputData}
        className="add_task_input"
        type="text"
      />
      <div className="add_button_container">
        <Button onClick={handleAddTaskClick}> Adicionar </Button>
      </div>
    </div>
  );
};

export default AddTask;
