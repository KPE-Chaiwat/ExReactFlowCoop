import { useState } from "react";
const CounterFunc = () => {
  const [counter, setCounter] = useState(0);

  function Increate() {
    setCounter(counter + 1);
  }
  function Decreate() {
    setCounter(counter - 1);
  }
  return {counter,Increate,Decreate}


};

export default CounterFunc;
