import React, { useMemo, useState } from "react";

function Memo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  function increment() {
    setCount1(count1 + 1);
  }
  function decrement() {
    setCount2(count2 - 1);
  }
  //   using memo to slow down only execution of increment function not on decrement
  //   function
  let isEven = useMemo(() => {
    for (let i = 0; i < 99999999; i++) {}
    return count1 % 2;
  }, [count1]);

  return (
    <div>
      <button onClick={increment}>{count1} increment </button>
      <div>{isEven === 0 ? "Even" : "Odd"}</div>
      <button onClick={decrement}>{count2} decrement</button>
    </div>
  );
}

export default Memo;
