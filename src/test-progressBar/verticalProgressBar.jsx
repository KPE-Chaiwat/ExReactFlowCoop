import { button } from "leva";
import React, { useState, useEffect } from "react";

const VerticalProgressBar = ({ progress }) => {
  // Define styles for vertical progress bar
  const progressStyle = {
    height: `10%`,
    backgroundColor: "#4caf50",
    width: "20px",
    transition: "height 0.5s ease-in-out",
    top: "-100px",
    position: "absolute",
  };

  return (
    <div
      style={{
        height: "300px",
        width: "30px",
        backgroundColor: "#ddd",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <div style={progressStyle}></div>
    </div>
  );
};

const MainVerticalProgressBar = () => {
  const [progress, setProgress] = useState(0);

  // ใช้ useEffect เพื่อให้ progress เพิ่มขึ้นเรื่อยๆ เมื่อ component ถูก mount
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10)); // เพิ่มค่าทุก 10%
    }, 1000);

    return () => clearInterval(timer); // เคลียร์ timer เมื่อ component ถูก unmount
  }, []);

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Vertical Progress Bar</h1>
      <VerticalProgressBar progress={progress} />
      <p>{progress}%</p>
    </div>
  );
};

export default MainVerticalProgressBar;
