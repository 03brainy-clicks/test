import React, { useEffect, useState } from "react";

function Child({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems);
  }, [getItems]);

  return (
    <div>
      {items &&
        items.map((item) => {
          return <div key={item}> {item}</div>;
        })}
    </div>
  );
}

export default Child;
