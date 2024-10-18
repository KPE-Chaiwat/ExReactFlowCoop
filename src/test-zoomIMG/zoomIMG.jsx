import React, { useState } from "react";

const ZoomImage = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const zoomStyle = {
    width: isZoomed ? "300px" : "200px",
    height: isZoomed ? "300px" : "200px",
    transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
    cursor: "pointer",
  };

  return (
    <div>
      <img
        src="https://cms.imgworlds.com/assets/e3873302-212a-4c3a-aab3-c3bee866903c.jpg?key=home-gallery"
        alt="Zoom"
        style={zoomStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default ZoomImage;
