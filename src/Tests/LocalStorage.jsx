
import "./LocalStorage.css";
import  CounterFunc  from "./functions/CounterFunctionText.jsx";

const LocalStorage = () => {
    const {counter,Increate,Decreate} = CounterFunc();
  return (
    <div>
      <h1>{counter}</h1>
      <div>
        <button className="button" onClick={Increate}>Increate up</button>
        <button className="button" onClick={Decreate}>count down </button>
      </div>
    </div>
  );
};

export default LocalStorage;
