import React, { useState, useEffect } from "react";
import "./RotateImage.css";

const RotateImage = () => {
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    let interval;
    if (isRotating) {
      interval = setInterval(() => {
        document.getElementById("image").style.transform += "rotate(1deg)";
      }, 10);
    } else if (!isRotating && interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRotating]);

  const handleStart = () => {
    setIsRotating(true);
  };

  const handleStop = () => {
    setIsRotating(false);
  };

  return (
    <div className="rotate-container">
      <img
        id="image"
        alt="Rotating"
        className="rotating-image"
        src="/logo512.png"
      />
      <div className="buttons">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

export default RotateImage;
