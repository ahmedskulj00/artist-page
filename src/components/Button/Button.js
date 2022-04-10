import React from "react";
import "./Button.css";

const Button = ({
  width,
  height,
  content,
  onClick,
  isPrimary,
  id,
  specialButton,
}) => {
  let buttonClass = "";

  const renderClass = () => {
    if (isPrimary && specialButton) {
      return (buttonClass = "btn primary_button special_button");
    }
    if (isPrimary) {
      return (buttonClass = "btn primary_button");
    } else if (!isPrimary) {
      return (buttonClass = "btn secondary_button");
    }
  };

  renderClass();

  return (
    <>
      <button
        className={buttonClass}
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
