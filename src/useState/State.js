import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  //  by 1
  function incrementby1() {
    setCount(count + 1);
  }
  function decrementby1() {
    setCount(count - 1);
  }

  //   by 2 using previous in state
  function incrementby2() {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }

  function decrementby2() {
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      {count} <br />
      <div>
        <button onClick={incrementby1}>increment by 1</button>
        <button onClick={decrementby1}>decrement by 1</button>
      </div>
      <div>
        <button onClick={incrementby2}>increment by 2</button>
        <button onClick={decrementby2}>decrement by 2</button>
      </div>
    </div>
  );
};

export default State;
