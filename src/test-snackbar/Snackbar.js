import React, { useState, useEffect } from "react";
import "./Snackbar.css";

const Snackbar = ({
  message,
  isOpen,
  onClose,
  duration = 3000,
  position = "bottom-right",
}) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  return (
    isOpen && (
      <div className={`snackbar ${position}`}>
        <span>{message}</span>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
      </div>
    )
  );
};

export default Snackbar;
