import React, { useState } from "react";

const SpinningSVG = () => {
  const [isSpinning, setIsSpinning] = useState(true);
  const linkIMG = "./images/google-icon.svg";

  const toggleSpin = () => {
    setIsSpinning(!isSpinning);
  };

  return (
    // <div onClick={toggleSpin}>

    // </div>
    <>
      <svg
        style={{
          height: 100,
          width: 100,
          // animation: isSpinning ? "spin 2s linear infinite" : "none",
          transformOrigin: "24px 24px",
          /* transform: scaleY(1.5); */
          /* transform: rotate(1deg); */
          animation: "2s linear 0s infinite normal none running spin",
        }}
        viewBox="0 0 48 48"
      >
        <image xlinkHref={linkIMG} width="48" height="48" />
      </svg>
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default SpinningSVG;
