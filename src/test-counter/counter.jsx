import React, { useState } from "react";

function Counter() {
  // Declare a state variable "count" and set its initial value to 0
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      {/* Button to increase the count */}
      <button onClick={Increment}>Increment</button>
      {/* Button to decrease the count */}
      <button onClick={Decrement} style={{ marginLeft: "10px" }}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
