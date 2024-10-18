import { useState, useEffect } from "react";

function TestCounter_useEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // const intervalId = setInterval(() => {
    //   setCount((c) => c + 1); // ✅ Pass a state updater
    // }, 1000);
    // return () => clearInterval(intervalId);

    console.log("oooo");
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        add
      </button>
    </div>
  );
}

export default TestCounter_useEffect;
