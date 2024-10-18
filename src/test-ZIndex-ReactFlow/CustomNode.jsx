import React from "react";
import { Handle, NodeResizer, useKeyPress } from "@xyflow/react";

const CustomNode = ({ data }) => {
  const shiftKeyPressed = useKeyPress("Shift");
  return (
    <div
      style={{
        border: "1px solid #777",
        padding: "10px",
        background: "white",
        zIndex: 10, // Custom zIndex here
        position: "relative",
      }}
    >
      {/* <NodeResizer
        color={"pink"}
        keepAspectRatio={shiftKeyPressed}
        isVisible={true}
      /> */}
      <strong>{data.label}</strong>
      <Handle type="source" position="right" />
      <Handle type="target" position="left" />
    </div>
  );
};

export default CustomNode;
