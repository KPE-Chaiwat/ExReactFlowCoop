import React, { useState, useEffect } from "react";

const VerticalProgressBarV2 = ({ progress }) => {
  // progress คือค่าที่ส่งมาเป็น props แสดงความก้าวหน้า (%)
  const progressStyle = {
    height: `${progress}%`,
    backgroundColor: "#4caf50",
    width: "100%",
    transition: "height 0.5s ease-in-out",
  };

  return (
    <div
      style={{
        width: "30px",
        height: "300px",
        backgroundColor: "#ddd",
        borderRadius: "5px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column-reverse", // สำคัญ: เปลี่ยนทิศทางเป็นจากล่างขึ้นบน
      }}
    >
      <div style={progressStyle}></div>
    </div>
  );
};

const MainVerticalProgressBarV2 = () => {
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
      <VerticalProgressBarV2 progress={progress} />
      <p>{progress}%</p>
    </div>
  );
};

export default MainVerticalProgressBarV2;
