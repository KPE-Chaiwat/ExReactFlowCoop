import React, { useState, useEffect } from "react";

const ProgressBar = ({ progress }) => {
  // progress คือค่าที่ส่งมาเป็น props แสดงความก้าวหน้า (%)
  const progressStyle = {
    width: `${progress}%`,
    backgroundColor: "#4caf50",
    height: "100%",
    transition: "width 0.5s ease-in-out",
  };

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#ddd",
        height: "30px",
        borderRadius: "5px",
        overflow: "hidden",
    
      }}
    >
      <div style={progressStyle}></div>
    </div>
  );
};

const MainProgressBar = () => {
  const [progress, setProgress] = useState(0);

  // ใช้ useEffect เพื่อให้ progress เพิ่มขึ้นเรื่อยๆ เมื่อ component ถูก mount
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10)); // เพิ่มค่าทุก 10%
    }, 1000);

    return () => clearInterval(timer); // เคลียร์ timer เมื่อ component ถูก unmount
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Progress Bar</h1>
      <ProgressBar progress={progress} />
      <p>{progress}%</p>
    </div>
  );
};

export default MainProgressBar;
