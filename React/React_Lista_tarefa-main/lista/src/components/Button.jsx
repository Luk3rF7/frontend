import React from "react";
import "../componentsStyle/Button.css";

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="add_task_button">
      {children}
    </button>
  );
};

export default Button;
