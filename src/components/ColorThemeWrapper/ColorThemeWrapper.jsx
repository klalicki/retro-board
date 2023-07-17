import { ModeContext } from "../../contexts/ModeContext";
import React from "react";
import { useContext } from "react";

const ColorThemeWrapper = ({ children }) => {
  const { mode, colorThemes } = useContext(ModeContext);
  const curColorTheme = mode.darkMode ? colorThemes.dark : colorThemes.light;

  return <div style={curColorTheme}>{children}</div>;
};
export default ColorThemeWrapper;
