import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  const clickHandle = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const clickHandleSubtract = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={clickHandle}> Addition </button>
      <button onClick={clickHandleSubtract}> Subtract </button>
    </div>
  );
}
