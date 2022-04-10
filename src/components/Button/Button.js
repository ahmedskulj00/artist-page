import React from "react";
import "./Button.css";

const Button = ({ width, height, content, onClick, isPrimary }) => {
  return (
    <>
      <button
        className={isPrimary ? "btn primary_button" : "btn secondary_button"}
        style={{ width: width, height: height }}
        onClick={onClick}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
