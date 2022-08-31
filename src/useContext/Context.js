import React, { createContext } from "react";
import A from "./A";

// creating context
const Firstname = createContext();
const Lastname = createContext();

const Context = () => {
  return (
    <div>
      {/* providing value  */}
      <Firstname.Provider value="Ram">
        <Lastname.Provider value="Raghuwanshi">
          <A />
        </Lastname.Provider>
      </Firstname.Provider>
    </div>
  );
};
export default Context;
export { Firstname, Lastname };
