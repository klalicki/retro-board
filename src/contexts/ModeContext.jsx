import { createContext, useState } from "react";

export const ModeContext = createContext();

export const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState({ layout: "horizontal", darkMode: false });

  const toggleLayout = () => {
    const newLayout = mode.layout === "horizontal" ? "vertical" : "horizontal";
    setMode({ ...mode, layout: newLayout });
  };
  const setDarkMode = (newVal) => {
    setMode({ ...mode, darkMode: newVal });
  };

  return (
    <ModeContext.Provider value={{ mode, toggleLayout, setDarkMode }}>
      {children}
    </ModeContext.Provider>
  );
};
