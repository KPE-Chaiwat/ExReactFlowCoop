import React from "react";
import "./Overlay.css";

const Overlay = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="overlay-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Overlay;
