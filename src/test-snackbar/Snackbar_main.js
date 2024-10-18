import React, { useState } from "react";
import Snackbar from "./Snackbar";

const Snackbar_main = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleOpenSnackbar = () => {
    setIsSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  return (
    <div className="App">
      <h1>Snackbar Example</h1>
      <button onClick={handleOpenSnackbar}>Show Snackbar</button>
      <Snackbar
        message="This is a snackbar!"
        isOpen={isSnackbarOpen}
        onClose={handleCloseSnackbar}
        duration={5000}
        position="top-right"
      />
    </div>
  );
};

export default Snackbar_main;
