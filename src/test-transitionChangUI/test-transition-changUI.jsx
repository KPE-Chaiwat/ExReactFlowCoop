import React, { useState } from "react";

const ToggleHeight = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleHeight = () => {
    setIsExpanded(!isExpanded);
  };

  const divStyle = {
    height: isExpanded ? "200px" : "0px",
    opacity: isExpanded ? 1 : 0,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
    transition: "height 0.5s ease, opacity 0.5s ease",
    padding: isExpanded ? "10px" : "0px",
  };

  return (
    <div>
      <button
        onClick={toggleHeight}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#e0e0e0")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
      >
        {isExpanded ? "Collapse" : "Expand"}
      </button>
      <div style={divStyle}>
        <p>This is some content inside the div.</p>
        <p>It will be shown or hidden based on the height toggle.</p>
      </div>
    </div>
  );
};

export default ToggleHeight;
