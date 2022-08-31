import React, { useEffect, useState } from "react";

const Effect = () => {
  const [state, setState] = useState("posts");
  const [count, setCount] = useState(0);
  const [items, setItems] = useState("");

  //   this one call at only once we set no state in []  or if we remove [] then it will call on every event trigger
  useEffect(() => {
    console.log("componentdidMounted");
  }, []);

  //   we can also set effect to trigger on certain state only  by passing state name in  []
  useEffect(() => {
    // data fetching
    fetch(`https://jsonplaceholder.typicode.com/${state}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    console.log("componentDidUpdate");
    return () =>
      // used to do clean up
      console.log("unmount");
  }, [state]);

  return (
    <div>
      <h1>{state}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Clicked {count}</button>
        <button onClick={() => setState("posts")}>Posts</button>
        <button onClick={() => setState("comments")}>Comments</button>
        <button onClick={() => setState("users")}>Users</button>
      </div>
      {/* data print using api  */}
      <ul>
        {items &&
          items.map((item) => (
            <div>
              <li key={item.id}>
                {" "}
                {item.id}
                <br />
                {item.title}
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Effect;
