import React from "react";
import "./Button.css";

const Button = ({ width, height, content, onClick, isPrimary, id }) => {
  return (
    <>
      <button
        className={isPrimary ? "btn primary_button" : "btn secondary_button"}
        style={{ width: width, height: height }}
        onClick={onClick}
        id={id}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
