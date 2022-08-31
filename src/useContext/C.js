import React, { useContext } from "react";
import { Firstname, Lastname } from "./Context";
const C = () => {
  // using useContext and consuming value
  const first = useContext(Firstname);
  const last = useContext(Lastname);
  return (
    <div>
      {first} {last}
    </div>
  );
};

export default C;
