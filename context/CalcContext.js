import { createContext, useState } from "react";

const CalcContext = createContext();

const CalcContextProvider = ({ children }) => {
  const [currentBmi, setCurrentBmi] = useState(0);
  const [currentLevel, setCurrentLevel] = useState("");

  return (
    <CalcContext.Provider
      value={{ currentBmi, setCurrentBmi, currentLevel, setCurrentLevel }}
    >
      {children}
    </CalcContext.Provider>
  );
};

export { CalcContext, CalcContextProvider };
