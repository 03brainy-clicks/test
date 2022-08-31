import React, { useRef } from "react";

function Ref() {
  const inputRef = useRef();

  const changer = () => {
    console.log((inputRef.current.style.color = "red"));
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} type="text" />{" "}
      <button onClick={() => changer()}>Change</button>
    </div>
  );
}

export default Ref;
