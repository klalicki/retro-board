import { createContext, useState } from "react";

export const ModeContext = createContext();
const colorThemes = {
  dark: {
    "--accent-color": "black",
    "--bg-color": "#222",
    "--fg-color": "white",
    "--list-header-text-color": "white",
    "--card-text-color": "white",
    "--focus-ring-color": "blue",
    "--col-color": "#000",
  },
  light: {
    "--accent-color": "black",
    "--bg-color": "white",
    "--fg-color": "black",
    "--list-header-text-color": "white",
    "--card-text-color": "black",
    "--focus-ring-color": "blue",
    "--col-color": "#eee",
  },
};

export const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState({ layout: "vertical", darkMode: false });

  const toggleLayout = () => {
    const newLayout = mode.layout === "horizontal" ? "vertical" : "horizontal";
    setMode({ ...mode, layout: newLayout });
  };
  const setDarkMode = (newVal) => {
    setMode({ ...mode, darkMode: newVal });
  };

  return (
    <ModeContext.Provider
      value={{ mode, toggleLayout, setDarkMode, colorThemes }}
    >
      {children}
    </ModeContext.Provider>
  );
};
