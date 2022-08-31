import React, { useCallback, useState } from "react";
import Child from "./Child";

function Callback() {
  const [countone, setCountone] = useState(0);
  const [counttwo, setCounttwo] = useState(0);

  //   we use callback hook to stop the count one tow call function without dependency
  const getItems = useCallback(() => {
    console.log(counttwo + 1, counttwo - 1);
    return [counttwo + 1, counttwo - 1];
  }, [counttwo]);
  return (
    <div>
      <button onClick={() => setCountone(countone + 1)}>
        {countone} countone
      </button>
      <button onClick={() => setCounttwo(counttwo + 1)}>
        {counttwo} counttwo
      </button>
      <div>
        <Child getItems={getItems} />
      </div>
    </div>
  );
}

export default Callback;
