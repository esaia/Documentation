import React, { createContext, useState } from "react";

export const ActiveNumberContextObj = createContext(0);

const ActiveNumberProvider = ({ children }) => {
  const [activeNumber, setActiveNumber] = useState(0);

  return (
    <ActiveNumberContextObj.Provider value={{ activeNumber, setActiveNumber }}>
      {children}
    </ActiveNumberContextObj.Provider>
  );
};

export default ActiveNumberProvider;
