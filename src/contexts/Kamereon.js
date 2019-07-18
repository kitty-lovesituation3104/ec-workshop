import React, { useState, createContext } from "react";

const Context = createContext();
const Provider = ({ children }) => {
  const [kamereon, setkamereon] = useState("w");

  return (
    <Context.Provider
      value={{
        kamereon,
        setkamereon
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default {
  Provider,
  Context
};
