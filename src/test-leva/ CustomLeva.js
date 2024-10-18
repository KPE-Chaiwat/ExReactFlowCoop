import React from "react";
import { Leva, useControls } from "leva";

const CustomLeva = () => {
  const { rotation, color } = useControls({
    rotation: { value: 0, min: 0, max: 360 },
    color: "#ff0000",
  });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color,
          transform: `rotate(${rotation}deg)`,
          margin: "0 auto",
        }}
      />
      <Leva
        theme={{
          colors: {
            highlight1: "#ff0000",
            highlight2: "#00ff00",
            highlight3: "#0000ff",
            accent1: "#ffffff",
            accent2: "#000000",
            accent3: "#888888",
          },
          fontSizes: {
            root: "14px",
            toolTip: "12px",
            label: "10px",
          },
          sizes: {
            controlWidth: "300px",
          },
        }}
      />
    </div>
  );
};

export default CustomLeva;
