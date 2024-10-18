import React, { useState } from "react";
import Overlay from "./Overlay";

const Overlay_Main = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleOpenOverlay = () => {
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
  };

  return (
    <div className="App">
      <h1>Overlay Example</h1>
      <button onClick={handleOpenOverlay}>Show Overlay</button>
      <Overlay isOpen={isOverlayOpen} onClose={handleCloseOverlay}>
        <h2>This is an overlay</h2>
        <p>Here you can place any content you want.</p>
      </Overlay>
    </div>
  );
};

export default Overlay_Main;
