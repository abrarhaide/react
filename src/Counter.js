import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState();

  // const increment = () => {
  //   setCount(count + 10);
  // };
  // const decrement = () => {
  //   setCount(count - 5);
  // };
  const handleClick = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };
  return (
    <div className="body">
      <button onClick={handleClick}>Increment</button>
      <h1 className="count">Count: {count}</h1>
      <button onClick={handleClick} className="hi">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
