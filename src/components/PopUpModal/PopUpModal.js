import React from "react";
import "./PopUpModal.css";

const PopUpModal = ({ children }) => {
  return (
    <div className="popup_container">
      <div className="popup_inner_container">{children}</div>
    </div>
  );
};

export default PopUpModal;
